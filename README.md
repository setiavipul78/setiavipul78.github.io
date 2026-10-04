# Vipul Setia · Portfolio

Brand marketing portfolio: 32 campaigns across Cars24, Apna and Zomato, with the thinking and the numbers.

**Live:** https://setiavipul78.github.io/portfolio/

The site is plain HTML, CSS and JavaScript hosted on GitHub Pages. There is no build step: edit a file, push, and the site updates in about a minute.

## What's where

```
├── index.html                  Redirects setiavipul78.github.io → /portfolio/
├── 404.html                    "Page not found" with a link back
├── robots.txt, sitemap.xml     Help Google index the site
└── portfolio/
    ├── index.html              Page layout, headline and intro text
    └── assets/
        ├── js/content.js       ← ALL the content: campaigns, numbers, career, awards, contact
        ├── js/app.js           Tabs, filters, case pop-ups (no need to edit)
        ├── css/styles.css      Look and feel, including the phone layout
        └── images/
            ├── profile/        Your photos on the Overview tab
            ├── campaigns/      Campaign images, named <campaign-id>-1.webp, -2.webp …
            ├── og-image.jpg    Preview image when the link is shared (1200×630)
            └── favicon.svg     Browser tab icon
```

## Common updates

**Change a number, line or link:** edit `portfolio/assets/js/content.js`. The comments at the top explain every field.

**Add a campaign:**
1. Save its images as WebP, at most 1000 px wide, around 70% quality, ideally under 100 KB each. [squoosh.app](https://squoosh.app) does this in the browser.
2. Name them `<campaign-id>-1.webp`, `<campaign-id>-2.webp` and put them in `portfolio/assets/images/campaigns/`.
3. Copy an existing entry in the `campaigns` list in `content.js`, then change the `id`, text and image names.
4. To feature it on the Flagship work tab, add its `id` to the `flagship` list.

**Change the headline or intro:** edit the `OVERVIEW` section near the top of `portfolio/index.html`.

**Change your photos:** replace the files in `portfolio/assets/images/profile/`, keeping the same names (headshot 4:5, the Cars24 photo square).

## Preview on your Mac, then publish

```sh
cd ~/vipul-portfolio
python3 -m http.server 8000        # open http://localhost:8000/portfolio/ ; Ctrl+C to stop

git add -A
git commit -m "Describe your change"
git push                           # live in about a minute
```

## Sharing a specific section

Every tab and case has its own link, which is useful in emails and DMs:

- Flagship work: https://setiavipul78.github.io/portfolio/#/work
- Business impact: https://setiavipul78.github.io/portfolio/#/impact
- All campaigns: https://setiavipul78.github.io/portfolio/#/campaigns
- One case, e.g. the challan billboard: https://setiavipul78.github.io/portfolio/#/work/challan-billboard
