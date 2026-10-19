"""Export browser icons from the same portrait used on the About page."""
from pathlib import Path
from PIL import Image, ImageDraw

assets = Path(__file__).resolve().parent.parent / "public" / "assets"
portrait = Image.open(assets / "mohammad-portrait-corrected.png").convert("RGBA")
# Face crop in the original 1672 x 941 portrait, with room around the hair.
face = portrait.crop((610, 35, 1140, 565))
for size, filename in [(64, "favicon-portrait.png"), (180, "apple-touch-icon.png")]:
    icon = face.resize((size, size), Image.Resampling.LANCZOS)
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size - 1, size - 1), fill=255)
    icon.putalpha(mask)
    icon.save(assets / filename)
