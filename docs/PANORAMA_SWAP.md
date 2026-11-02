# Swap panoramas

The demo ships Conde de la Vega 304 360° stills (private demo — credit in the tour footer). To use your own unit:

## 1. Files

Put **equirectangular** JPEGs (2:1, e.g. 4096×2048) in `public/panoramas/`:

| File | Room |
| --- | --- |
| `hall.jpg` | Entrance hall |
| `dining.jpg` | Living & dining |
| `kitchen.jpg` | Kitchen |
| `living.jpg` | Family room |
| `master.jpg` | Master bedroom |
| `master-bath.jpg` | Master bath |
| `bedroom-2.jpg` | Bedroom 2 |
| `bath-2.jpg` | Bath 2 |
| `guest-bath.jpg` | Guest bath |
| `terrace-1.jpg` | Terrace |
| `terrace-2.jpg` | Terrace 2 |

Optional stills for the Photos tab: `public/photos/<id>.jpg` (16:9).

Floor plan: `public/plans/floor-plan-unit.jpg` (cropped unit drawing the pins sit on) and `public/plans/floor-plan.jpg` (full sheet).

## 2. Graph, pins, look direction

Edit `lib/units.ts`:

- `hotspots[].ath` — yaw in degrees (0 = center of the pano, same convention as krpano)
- `hotspots[].atv` — degrees below the horizon (floor pads, typically 22–40)
- `yaw` — starting look direction
- `plan: { x, y }` — pin position as **percent of the cropped floor-plan image**

Keep `id: 'demo'` if you still want `/view/demo`. Add another object in `getUnit()` for a second unit.

## 3. Convert from a krpano tour

If you have cube tiles instead of equirectangular stills:

1. Prefer the original Theta/Insta360 2:1 JPEG (`src/images` in the Conde Vega repo).
2. Otherwise stitch cube faces `l,f,r,b,u,d` with ImageMagick or a cube→equirect tool, resize to 4096×2048, JPEG quality ~78.

Do **not** commit multi-resolution krpano tile trees — they are huge and unused by this viewer.

## 4. Credit

If you keep Conde Vega pans, leave the disclaimer in `DEMO_UNIT.credit`. If you replace them, update that string (and the README) so the previous project is no longer credited.
