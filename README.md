# ShowUnit

A **sales-agent tool**, not a consumer marketplace. Philippine condo agents send a client one branded link to a 360° Matterport-style walkthrough of a unit.

## Client link

```
/view/demo?agent=Maria%20Santos&phone=09171234567
```

Optional: `&messenger=YourPageName` for a direct `m.me` button.

The tour shows the agent’s initials and name, plus **Call**, **Viber**, and **Messenger**. Tabs: **Photos** · **Floor Plan** · **3D Tour**. Floor pads hop rooms; plan pins jump the camera. Footer: artist’s rendition + Conde Vega credit.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to mint a link, or go straight to the sample URL above.

## Stack

Next.js 14 (App Router) · React Three Fiber · drei · Tailwind CSS. One stack — no Vite/Theatre dual setup, no listing marketplace, no lead-capture modal.

## Demo content

360° pans and the floor plan are from [Conde de la Vega 304](https://github.com/patrickhuijten/virtual-tour-conde-vega-304) (Ricoh Theta stills, private demo). They are an **artist’s rendition** for illustration only. Credit: Patrick Huijten / Grupo Chacarilla Sur.

To drop in your own unit, see [`docs/PANORAMA_SWAP.md`](docs/PANORAMA_SWAP.md).
