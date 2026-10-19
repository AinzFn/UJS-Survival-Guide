"""从学校官方矢量 PDF 提取站点用图片素材（可重复执行）。

源 PDF 体积较大（地图约 13.5MB）且版权归学校，不入 git 仓库。
从学校官方渠道获取后放到下列路径，再运行本脚本即可重新生成全部图片素材。

用法：
    pip install pymupdf
    python scripts/extract_assets.py
"""
import os

import pymupdf

SRC_DIR = 'E:/ujs/学校标识矢量文件'
EMBLEM_PDF = f'{SRC_DIR}/1 江苏大学校标.pdf'
LOGO_PDF = f'{SRC_DIR}/4 常用校标组合（横板）.pdf'
MAP_PDF = f'{SRC_DIR}/13 江苏大学校园地图（校本部）2021版.pdf'
OUT = 'E:/ujs/ujs-manual/docs/public/img'


def emblem():
    """圆形校徽：导航栏 logo（SVG）与 favicon（白底 PNG）。"""
    import re

    from PIL import Image, ImageDraw

    doc = pymupdf.open(EMBLEM_PDF)
    page = doc[0]
    pix = page.get_pixmap(matrix=pymupdf.Matrix(300 / 72, 300 / 72), alpha=True)
    pix.save(f'{OUT}/emblem.png')

    # SVG：把视窗裁到徽章内容，去掉页面四周的透明留白
    svg = page.get_svg_image(matrix=pymupdf.Matrix(2, 2))
    m = re.search(r'width="([\d.]+)" height="[\d.]+" viewBox="0 0 ([\d.]+) ', svg)
    svg_w = float(m.group(1))
    ratio = pix.width / svg_w  # 位图像素 / SVG 单位
    x0, y0, x1, y1 = Image.open(f'{OUT}/emblem.png').getbbox()
    cx0, cy0, cx1, cy1 = (v / ratio for v in (x0, y0, x1, y1))
    w, h = cx1 - cx0, cy1 - cy0
    svg = re.sub(
        r'width="[\d.]+" height="[\d.]+" viewBox="0 0 [\d.]+ [\d.]+"',
        f'width="{w:.2f}" height="{h:.2f}" viewBox="{cx0:.2f} {cy0:.2f} {w:.2f} {h:.2f}"',
        svg, count=1)
    with open(f'{OUT}/emblem.svg', 'w', encoding='utf-8') as f:
        f.write(svg)
    doc.close()

    # favicon：白圆底 + 校徽，深色标签栏上也能看清
    src = Image.open(f'{OUT}/emblem.png').convert('RGBA')
    src = src.crop(src.getbbox())
    size = 256
    scale = size * 0.96 / max(src.size)
    src = src.resize((round(src.width * scale), round(src.height * scale)), Image.LANCZOS)
    canvas = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    ss = 4  # 白色圆底用 4x 超采样画，边缘平滑
    mask = Image.new('L', (size * ss, size * ss), 0)
    ImageDraw.Draw(mask).ellipse(
        [ss // 2, ss // 2, size * ss - ss // 2, size * ss - ss // 2], fill=255)
    mask = mask.resize((size, size), Image.LANCZOS)
    canvas.paste(Image.new('RGBA', (size, size), (255, 255, 255, 255)), (0, 0), mask)
    canvas.paste(src, ((size - src.width) // 2, (size - src.height) // 2), src)
    canvas.save(f'{OUT}/emblem-256.png')
    print('emblem.svg / .png / -256.png 已生成')


def logo():
    doc = pymupdf.open(LOGO_PDF)
    page = doc[0]
    # 300 DPI 透明底位图（本地备份用，站点封面用 SVG）
    pix = page.get_pixmap(matrix=pymupdf.Matrix(300 / 72, 300 / 72), alpha=True)
    pix.save(f'{OUT}/logo-horizontal.png')
    with open(f'{OUT}/logo-horizontal.svg', 'w', encoding='utf-8') as f:
        f.write(page.get_svg_image(matrix=pymupdf.Matrix(2, 2)))
    doc.close()
    print('logo-horizontal.svg / .png 已生成')


def map_jpeg(width=4600, quality=80):
    doc = pymupdf.open(MAP_PDF)
    page = doc[0]
    zoom = width / page.rect.width
    pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom))
    pix.pil_save(f'{OUT}/campus-map.jpg', format='JPEG', quality=quality)
    doc.close()
    print(f'campus-map.jpg 已生成（{width}px / q{quality}）')


if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    emblem()
    logo()
    map_jpeg()
