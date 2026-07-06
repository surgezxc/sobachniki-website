#!/usr/bin/env python3
"""Обрезает системный статус-бар (время, зарядка) с верхней части скриншотов."""

from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image

CROP_RATIO = 0.045  # ~46 px при высоте 1024


def crop_status_bar(src: Path, dst: Path | None = None) -> None:
    im = Image.open(src)
    w, h = im.size
    crop = int(h * CROP_RATIO)
    cropped = im.crop((0, crop, w, h))
    cropped.save(dst or src, quality=92)
    print(f"{src.name}: {w}x{h} -> {w}x{h - crop} (crop {crop}px)")


def main() -> None:
    targets = sys.argv[1:] or ["public/screenshots"]
    for target in targets:
        path = Path(target)
        if path.is_dir():
            for file in sorted(path.glob("*.png")):
                crop_status_bar(file)
        elif path.is_file():
            crop_status_bar(path)
        else:
            print(f"Skip: {path}")


if __name__ == "__main__":
    main()
