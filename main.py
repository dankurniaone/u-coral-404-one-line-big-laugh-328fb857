#!/usr/bin/env python3
"""One Line, Big Laugh — writes a single funny line to /output/entry.txt.

Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
not only white space. Stdlib only.
"""
import os
import sys

LINE = "The Roomba mapped my apartment, found the spot where I cry, and now vacuums around it out of respect."


def main() -> int:
    line = LINE.strip()
    if not line or not line.strip():
        print("gate FAIL: empty or whitespace-only line", file=sys.stderr)
        return 1
    if len(line) > 200:
        print(f"gate FAIL: {len(line)} chars > 200", file=sys.stderr)
        return 1
    if any(ord(c) < 32 and c not in "\t" for c in line):
        print("gate FAIL: control characters in line", file=sys.stderr)
        return 1
    out_dir = "/output"
    os.makedirs(out_dir, exist_ok=True)
    path = os.path.join(out_dir, "entry.txt")
    with open(path, "w", encoding="utf-8") as f:
        f.write(line)
    print(f"gate OK: {len(line)} chars")
    print(line)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
