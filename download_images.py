import os
import shutil
import urllib.request
import urllib.error

dest_dir = os.path.join("public", "assets", "images")
os.makedirs(dest_dir, exist_ok=True)

# Also copy existing underscore files to hyphenated files
mapping = {
    "groundnut_oil.jpg": "groundnut-oil.jpg",
    "coconut_oil.jpg": "coconut-oil.jpg",
    "mustard_oil.jpg": "mustard-oil.jpg",
    "sesame_oil.jpg": "sesame-oil.jpg",
    "hero_banner.jpg": "hero-banner.jpg",
}

for src, dst in mapping.items():
    src_path = os.path.join(dest_dir, src)
    dst_path = os.path.join(dest_dir, dst)
    if os.path.exists(src_path) and not os.path.exists(dst_path):
        shutil.copyfile(src_path, dst_path)
        print(f"Copied {src} -> {dst}")

# High-resolution Unsplash curated photo IDs for Indian natural foods, seeds, dry fruits, spices, and laddoos
# Unsplash license permits free commercial & non-commercial use with no watermark
unsplash_items = {
    "sunflower-oil.jpg": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&auto=format&fit=crop&q=80",
    "safflower-oil.jpg": "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=800&auto=format&fit=crop&q=80",
    "almonds.jpg": "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=800&auto=format&fit=crop&q=80",
    "cashews.jpg": "https://images.unsplash.com/photo-1536591375315-1988d6896245?w=800&auto=format&fit=crop&q=80",
    "pistachios.jpg": "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=800&auto=format&fit=crop&q=80",
    "walnuts.jpg": "https://images.unsplash.com/photo-1568283661153-659f5f00e998?w=800&auto=format&fit=crop&q=80",
    "raisins.jpg": "https://images.unsplash.com/photo-1582293041079-7814c2f12063?w=800&auto=format&fit=crop&q=80",
    "dates.jpg": "https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&auto=format&fit=crop&q=80",
    "pumpkin-seeds.jpg": "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=800&auto=format&fit=crop&q=80",
    "sunflower-seeds.jpg": "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800&auto=format&fit=crop&q=80",
    "chia-seeds.jpg": "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?w=800&auto=format&fit=crop&q=80",
    "flax-seeds.jpg": "https://images.unsplash.com/photo-1608755728617-aefab37d2edd?w=800&auto=format&fit=crop&q=80",
    "sesame-seeds.jpg": "https://images.unsplash.com/photo-1598030304671-5aa1d6f21128?w=800&auto=format&fit=crop&q=80",
    "turmeric-powder.jpg": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&auto=format&fit=crop&q=80",
    "red-chilli-powder.jpg": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80",
    "coriander-powder.jpg": "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=800&auto=format&fit=crop&q=80",
    "cumin-seeds.jpg": "https://images.unsplash.com/photo-1596040033282-3e04a4347719?w=800&auto=format&fit=crop&q=80",
    "black-pepper.jpg": "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=800&auto=format&fit=crop&q=80",
    "dry-fruits-laddoo.jpg": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80"
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for filename, url in unsplash_items.items():
    file_path = os.path.join(dest_dir, filename)
    if os.path.exists(file_path) and os.path.getsize(file_path) > 10000:
        print(f"Skipping {filename} (already exists)")
        continue

    try:
        print(f"Downloading {filename}...")
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as response, open(file_path, 'wb') as out_file:
            shutil.copyfileobj(response, out_file)
        print(f"Saved {filename} ({os.path.getsize(file_path)} bytes)")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")

print("Image preparation complete!")
