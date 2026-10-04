/*
 * Everything the portfolio shows lives in this file.
 * Edit text here, save, then commit and push (see README.md). No build step.
 *
 * Colours for sticky notes: 'yellow', 'pink', 'green' or 'blue'.
 * Tilt is in degrees (small numbers like -2 to 2 look best).
 *
 * Campaign fields:
 *   id          short web-safe name; also used in links like #/campaigns/<id>
 *   date        YYYY-MM, used to sort newest first
 *   when        the date text shown on the card
 *   film        true if the main link is a film (adds a play button)
 *   jobs        which "By the job" filters it appears under (see filters below)
 *   mediums     which "By medium" filters it appears under
 *   hook        one handwritten line on the card
 *   headline    the big number on the card
 *   cover       image file in assets/images/campaigns/ (optional)
 *   gallery     more images; use { image, video, caption } to make one a video link
 *   link        main post or film; linkText changes its button label
 *   watch       extra films or reels: { title, url }
 *   press       press coverage: { title, url }
 */

window.PORTFOLIO = {
  // How people reach you (hero buttons and the footer).
  contact: {
    email: 'setiavipul78@gmail.com',
    phone: '+91 99718 62378',
    phoneLink: 'tel:+919971862378',
    linkedin: 'https://www.linkedin.com/in/vipulsetia78'
  },

  // The coloured proof notes under the headline on the Overview tab.
  proof: [
    { value: '+8 pts', label: 'market share in 8 months', color: 'yellow', tilt: -1.5 },
    { value: '1.6x', label: 'organic brand search (+64%)', color: 'blue', tilt: 1 },
    {
      value: '185M+',
      label: 'impressions, first brand campaign in 3 years',
      color: 'pink',
      tilt: 1
    },
    { value: '₹0.08', label: 'per view across 229M creator views', color: 'green', tilt: -1 },
    {
      value: '3 awards',
      label: 'SAMMIE, e4m RetailEX, afaqs! Digital Evangelist',
      color: 'blue',
      tilt: 1.5
    }
  ],

  // "How I think" notes on the Overview tab.
  rules: [
    {
      line: 'Not louder. More useful.',
      body: 'You cannot buy your way past indifference. Attention is earned by being useful, relevant and true.',
      color: 'yellow',
      tilt: -2
    },
    {
      line: 'Presence is not relevance.',
      body: 'A bigger billboard is not a better one. The HYROX mirror worked because it meant something in that moment.',
      color: 'green',
      tilt: 1.5
    },
    {
      line: 'Offline is the trailer, not the film.',
      body: 'You get 3 seconds outdoors. Trigger something people already know, and let the rest of the campaign do the telling.',
      color: 'pink',
      tilt: -1
    },
    {
      line: "If you can swap the brand, it's clutter.",
      body: 'The best ideas cannot be separated from the promise behind them.',
      color: 'blue',
      tilt: 2
    },
    {
      line: 'Fit beats fame.',
      body: 'Celebrity timing gets attention. Content fit gets trust.',
      color: 'yellow',
      tilt: 1
    },
    {
      line: 'Purpose has to be close to the product.',
      body: "People don't hate purpose marketing. They hate fake purpose marketing.",
      color: 'green',
      tilt: -1.5
    },
    {
      line: 'Creativity with functionality.',
      body: 'An ad can be clever and still useless, or simple and still effective. I want both at once.',
      color: 'pink',
      tilt: 1.5
    },
    {
      line: 'Distribution is the multiplier.',
      body: 'Great creative with poor distribution dies quietly. The campaign starts before the ad does.',
      color: 'blue',
      tilt: -1
    }
  ],

  // Flagship work tab. Each id must match a campaign below.
  flagship: [
    {
      id: 'challan-billboard',
      line: 'Be useful, not loud.',
      where: 'Cars24 · Bengaluru, Jaipur, Gurugram · 2025-26',
      problem: 'OOH was a recall touchpoint. Could a billboard drive engagement, when nobody stops to scan for a brand?',
      idea: 'A billboard that reads number plates and shows pending challans in real time, built with traffic police in 31 days.',
      stats: [
        { value: '37M+', label: 'organic views in a week' },
        { value: '50+', label: 'media stories in 48 hours' },
        { value: '10-12%', label: 'of monthly brand search' },
        { value: 'SAMMIE', label: '2026 winner' }
      ]
    },
    {
      id: 'promise-films',
      line: 'First mass brand campaign in 3 years.',
      where: 'Cars24 · Feb 2026',
      mediaKind: 'Brand film series',
      problem: 'In used cars, trust is the biggest barrier, and price wars only teach people to shop around.',
      idea: 'Three family films, each carrying one promise, live during the T20 World Cup on mobile and CTV, with regional versions across 17 markets.',
      stats: [
        { value: '185M+', label: 'impressions' },
        { value: '20M+', label: 'social reach' },
        { value: '16/17', label: 'markets with search lift' },
        { value: 'Google', label: 'case study' }
      ]
    },
    {
      id: 'vikram-betaal',
      line: 'Every low-trust category has its own Betaal.',
      where: 'Cars24 · TV, CTV, digital · Sep 2026',
      mediaKind: 'TV and digital films',
      problem: 'Our two biggest promises needed to feel memorable, not just believable.',
      idea: "India's favourite folklore pair carries the promises, after an unbranded 'Betaal sightings' teaser across 8 cities.",
      stats: [
        { value: '2', label: 'promise films' },
        { value: '8', label: 'teaser cities' },
        { value: 'MoM', label: 'featured by Mad Over Marketing' }
      ]
    },
    {
      id: 'boats24',
      line: 'Show up when it matters.',
      where: 'Cars24 · Gurugram floods · Aug 2026',
      problem: 'Gurugram flooded, and people could not get home.',
      idea: 'For one weekend Cars24 became Boats24, ferrying stranded people across roads that had disappeared.',
      stats: [
        { value: '7.17M', label: 'Instagram views' },
        { value: '1.21M', label: 'LinkedIn impressions' },
        { value: '20+', label: 'media stories' }
      ]
    },
    {
      id: 'make-your-move',
      line: 'Offline is the trailer, not the film.',
      where: 'Cars24 · Bengaluru · 2025',
      problem: 'Grow share in a crowded city on a flat budget, with a model other cities can copy.',
      idea: 'One line, "Buying made simple. Selling made easy.", looped across OOH, 1,000 cab wraps, Zomato bags, creators, audio and ORM.',
      stats: [
        { value: '+8 pts', label: 'market share in 8 months' },
        { value: '+27%', label: 'organic new users' },
        { value: '+38%', label: 'brand search' }
      ]
    },
    {
      id: 'apna-kaam-aayega',
      title: "Building Apna's brand",
      line: 'Creative is rarely the problem. Fit is.',
      where: 'Apna · 2022-24',
      problem: 'Apna grew on performance alone and had never built a brand. CAC kept climbing, and white-collar users did not see themselves on it.',
      idea: '"Apna Kaam Aayega", the first brand campaign on the T20 World Cup, then "Hustle Chal Rha Hai" in the voice of white-collar job seekers.',
      stats: [
        { value: '150M+', label: 'reach' },
        { value: '3.5x', label: 'consideration' },
        { value: '-35%', label: 'CAC' },
        { value: '13→31%', label: 'white-collar users' }
      ]
    }
  ],

  // Impact tab. beforeValue/afterValue are drawn as bars against scaleMax.
  impact: [
    {
      metric: 'Share of search',
      company: 'Cars24',
      headline: '1.5x',
      before: '1.0x',
      beforeValue: 1,
      after: '1.5x',
      afterValue: 1.47,
      scaleMax: 1.7,
      note: 'Lowest to highest month, led by cricket and YouTube.'
    },
    {
      metric: 'Organic brand search',
      company: 'Cars24',
      headline: '1.6x',
      before: '1.0x',
      beforeValue: 1,
      after: '1.6x',
      afterValue: 1.64,
      scaleMax: 1.8,
      note: '+64%, with year-on-year growth every month.'
    },
    {
      metric: 'Organic new users',
      company: 'Cars24',
      headline: '+27%',
      before: '1.0x',
      beforeValue: 1,
      after: '1.27x',
      afterValue: 1.27,
      scaleMax: 1.8,
      note: 'City-led brand model, on a flat budget.'
    },
    {
      metric: 'Creator cost per view',
      company: 'Cars24',
      headline: '-75%',
      before: '₹0.32',
      beforeValue: 0.32,
      after: '₹0.08',
      afterValue: 0.08,
      scaleMax: 0.36,
      note: '229M views from a creator program built from zero.'
    },
    {
      metric: 'White-collar share of users',
      company: 'Apna',
      headline: '2.4x',
      before: '13%',
      beforeValue: 13,
      after: '31%',
      afterValue: 31,
      scaleMax: 36,
      note: 'Repositioning campaign, 45M+ reach.'
    },
    {
      metric: 'Facility utilisation',
      company: 'Zomato',
      headline: '+21 pts',
      before: '37%',
      beforeValue: 37,
      after: '58%',
      afterValue: 58,
      scaleMax: 70,
      note: 'Pay & Play from ₹23K to ₹23L a month.'
    }
  ],

  // Filter chips on the All campaigns tab ("All" is added automatically).
  filters: {
    jobs: [
      'Brand building',
      'Trust & promises',
      'Purpose & road safety',
      'Moment marketing',
      'Creators & influence',
      'Growth & retail'
    ],
    mediums: ['Brand films', 'OOH & billboards', 'Print', 'On-ground', 'Digital & social']
  },

  // Every campaign. Shows on All campaigns, and opens as a full case.
  campaigns: [
    {
      id: 'challan-billboard',
      title: 'The challan billboard',
      company: 'Cars24',
      date: '2025-09',
      when: 'Sep 2025 onwards',
      jobs: ['Purpose & road safety', 'Brand building'],
      mediums: ['OOH & billboards'],
      hook: 'Nobody wants to engage with a brand. Every driver wants to know if they have a fine.',
      headline: { value: '37M+', label: 'organic views in a week · SAMMIE 2026' },
      objective: 'Turn OOH from a recall touchpoint into a channel people actually engage with, and make road safety personal.',
      whatWeDid: "Built India's first real-time challan billboard: ANPR cameras read number plates at a busy junction and the screen shows pending fines live. Launched in Bengaluru, then Jaipur, where we also trained police on our vehicle alert system, and Gurugram's Sohna Chowk.",
      results: [
        { value: '37M+', label: 'organic views in one week (Gurugram)' },
        { value: '15M+', label: 'organic reach at launch (Bengaluru)' },
        { value: '50+', label: 'media stories in 48 hours' },
        { value: '10-12%', label: 'of monthly brand search impressions' },
        { value: '1st', label: 'Cars24 reel to cross 100K organically' },
        { value: 'SAMMIE', label: '2026, Best Use of Technology' }
      ],
      cover: 'challan-billboard-1.webp',
      link: 'https://www.linkedin.com/posts/vipulsetia78_branding-innovation-marketing-activity-7377212833387696129-_9vi'
    },
    {
      id: 'boats24',
      title: 'Boats24',
      company: 'Cars24',
      date: '2026-08',
      when: 'Aug 2026',
      jobs: ['Moment marketing'],
      mediums: ['On-ground', 'Digital & social'],
      hook: 'Help arriving exactly where people were stuck.',
      headline: { value: '8.4M+', label: 'views and impressions · 20+ media' },
      objective: 'Show up for the city in a real moment, not a staged one.',
      whatWeDid: 'When Gurugram flooded, Cars24 became Boats24 for the weekend: branded boats on waterlogged stretches, ferrying people across roads that had disappeared. Same branding, new fleet, and a pointed comment on a city that floods every year.',
      results: [
        { value: '7.17M', label: 'Instagram views' },
        { value: '125K', label: 'Instagram engagements' },
        { value: '1.21M', label: 'LinkedIn impressions' },
        { value: '20+', label: 'media stories' }
      ],
      cover: 'boats24-1.webp',
      gallery: ['boats24-2.webp'],
      link: 'https://www.linkedin.com/posts/vipulsetia78_branding-marketing-activity-7492443389322244096-92Mz',
      press: [
        {
          title: 'Hindustan Times',
          url: 'https://www.hindustantimes.com/trending/crime-boat-location-road-cars24-claims-getting-50-000-challan-after-putting-boat-on-waterlogged-gurgaon-street-101786414073039.html'
        },
        {
          title: 'Indian Express',
          url: 'https://indianexpress.com/article/trending/trending-in-india/cars24-rs-50000-challan-gurgaon-boat-waterlogging-10827433/'
        },
        {
          title: 'Business Today',
          url: 'https://www.businesstoday.in/latest/trends/story/cars24s-boat-campaign-goes-viral-gurugram-police-denies-rs50000-challan-seizes-boat-548705-2026-08-12'
        },
        {
          title: 'afaqs!',
          url: 'https://www.afaqs.com/news/mktg/cars24s-boat-stunt-turns-flooded-gurugram-road-into-a-commute-12254770'
        }
      ]
    },
    {
      id: 'promise-films',
      title: 'The Promise films',
      company: 'Cars24',
      date: '2026-02',
      when: 'Feb 2026',
      film: true,
      jobs: ['Brand building', 'Trust & promises'],
      mediums: ['Brand films', 'Digital & social'],
      hook: 'First mass brand campaign in 3 years, told through family promises.',
      headline: { value: '185M+', label: 'impressions during the T20 World Cup' },
      objective: 'Return to mass brand advertising after 3 years and make our promises believable in a low-trust category.',
      whatWeDid: 'Three films, Mother, Mother-in-law and Sister, each carrying one promise: 30-day return, lifetime warranty and best value. Live on mobile and CTV during the T20 World Cup, with regional-language versions on YouTube CTV across 17 markets, amplified by 250 meme pages and marketing creators.',
      results: [
        { value: '185M+', label: 'impressions during the tournament' },
        { value: '20M+', label: 'social reach across Instagram, LinkedIn, YouTube, X' },
        { value: '17+', label: 'PR stories in top-tier media' },
        { value: '16/17', label: 'markets with search lift (Google case study)' }
      ],
      cover: 'promise-films-1.webp',
      gallery: ['promise-films-2.webp', 'promise-films-3.webp'],
      link: 'https://www.linkedin.com/posts/vipulsetia78_pehle-istemaal-karein-phir-vishwaas-karein-activity-7432676954480271360-5DGC'
    },
    {
      id: 'vikram-betaal',
      title: 'Vikram & Betaal',
      company: 'Cars24',
      date: '2026-09',
      when: 'Sep 2026',
      film: true,
      jobs: ['Trust & promises', 'Brand building'],
      mediums: ['Brand films', 'Digital & social'],
      hook: 'Every low-trust category has its own Betaal.',
      headline: { value: '8 cities', label: 'unbranded teaser · featured by Mad Over Marketing' },
      objective: 'Make our two biggest promises, 30-day return and lifetime warranty, memorable as well as believable.',
      whatWeDid: "India's favourite folklore pair carries the promises across TV, CTV and digital. Before launch, an unbranded 'Betaal sightings' teaser ran across 8 cities, followed by road-safety comic books in every hub.",
      results: [
        { value: '2', label: 'promise films on TV and CTV' },
        { value: '8', label: 'teaser cities' },
        { value: 'MoM', label: 'featured by Mad Over Marketing' },
        { value: 'Top 3', label: 'audience themes: distinctive, funny, nostalgic' }
      ],
      cover: 'vikram-betaal-1.webp',
      gallery: ['vikram-betaal-2.webp'],
      link: 'https://www.linkedin.com/posts/vipulsetia78_every-low-trust-category-has-its-own-betaal-activity-7503339807066976256-r1Kg'
    },
    {
      id: 'make-your-move',
      title: 'Make Your Move',
      company: 'Cars24',
      date: '2025-10',
      when: '2025',
      jobs: ['Brand building', 'Growth & retail'],
      mediums: ['OOH & billboards', 'Digital & social'],
      hook: 'You get 3 seconds outdoors. Say one thing everywhere.',
      headline: { value: '+8 pts', label: 'market share in 8 months' },
      objective: 'Grow share in Bengaluru on a flat budget, with a city model other cities could copy.',
      whatWeDid: 'One line, "Buying made simple. Selling made easy.", looped across 1,000 cab wraps, gantries, digital billboards, bus shelters, Zomato delivery bags, 20-second audio ads, creators and ORM. Later extended to Pune and Hyderabad.',
      results: [
        { value: '+8 pts', label: 'market share in 8 months' },
        { value: '+27%', label: 'organic new users' },
        { value: '+38%', label: 'brand search impressions' },
        { value: '93%', label: 'listen-through on audio ads' }
      ],
      cover: 'make-your-move-1.webp',
      gallery: [
        'make-your-move-2.webp',
        'make-your-move-3.webp',
        'make-your-move-4.webp',
        'make-your-move-5.webp',
        'make-your-move-6.webp'
      ],
      link: 'https://www.linkedin.com/posts/vipulsetia78_marketing-innovation-brandbuilding-activity-7382321172484390912-g-Ej'
    },
    {
      id: 'the-rebrand',
      title: 'The rebrand',
      company: 'Cars24',
      date: '2026-02',
      when: 'Jan-Mar 2026',
      jobs: ['Brand building', 'Growth & retail'],
      mediums: ['On-ground'],
      hook: 'A brand whose work speaks for itself no longer needs to shout.',
      headline: { value: '56', label: 'hubs moved to the new identity' },
      objective: 'Bring the identity in line with what the business had become: a car-ownership platform, not just a transaction.',
      whatWeDid: 'Moved from CARS24 to Cars24 with a calmer identity, a new logo and regional-language logos, and revamped 50+ hub creatives, posters, facades and signs.',
      results: [
        { value: '56', label: 'hubs on the new identity' },
        { value: '50+', label: 'hub creatives revamped' },
        { value: 'Regional', label: 'language versions of the logo' }
      ],
      link: 'https://www.linkedin.com/posts/ndtvprofit_cars24-has-rebranded-as-cars24-signalling-activity-7426586208522301440-cATc',
      linkText: 'Read the NDTV Profit coverage'
    },
    {
      id: 'aalam-bhai',
      title: 'Aalam Bhai tests our promises',
      company: 'Cars24',
      date: '2026-05',
      when: 'May 2026',
      film: true,
      jobs: ['Trust & promises', 'Creators & influence'],
      mediums: ['Brand films', 'Digital & social'],
      hook: 'People believe a promise when someone tries to break it.',
      headline: { value: '5.12%', label: 'CTR, ~4x account average' },
      objective: 'Make 30-day return and lifetime warranty feel tested, not claimed.',
      whatWeDid: "Gaurav Gera, as India's favourite on-screen spy, stress-tests both promises. Written and directed in-house, released organically and then scaled as trust-led performance ads.",
      results: [
        { value: '5.12%', label: 'CTR, nearly 4x the account average' },
        { value: '10.6M+', label: 'paid views' },
        { value: '8.06M', label: 'paid reach' },
        { value: '~1M', label: 'organic views' },
        { value: '128K+', label: 'likes' }
      ],
      cover: 'aalam-bhai-1.webp',
      link: 'https://www.linkedin.com/posts/vipulsetia78_branding-celebrity-marketing-activity-7465986541161689088-x0Ja'
    },
    {
      id: 'thala-billboard',
      title: "Thala's birthday billboard",
      company: 'Cars24',
      date: '2026-07',
      when: 'Jul 2026',
      jobs: ['Purpose & road safety', 'Moment marketing'],
      mediums: ['OOH & billboards'],
      hook: "Dhoni's silhouette made of the road-safety signs we ignore.",
      headline: { value: '3.1M+', label: 'social reach' },
      objective: "Use the day's attention to point people back to road safety.",
      whatWeDid: "In Chennai, the city that made him Thala, a billboard fused Dhoni's silhouette with everyday road-safety signs, making CrashFree India the idea itself, not just branding.",
      results: [
        { value: '2.4M', label: 'Instagram reach' },
        { value: '65K', label: 'Instagram engagements' },
        { value: '731K', label: 'LinkedIn reach' },
        { value: '1st', label: 'innovation billboard in the South' }
      ],
      cover: 'thala-billboard-1.webp',
      link: 'https://www.linkedin.com/posts/vipulsetia78_branding-ooh-msdhoni-activity-7480476113715060736-giJV'
    },
    {
      id: 'dont-drink-drive',
      title: "Don't drink and drive",
      company: 'Cars24',
      date: '2025-12',
      when: 'Dec 2025',
      jobs: ['Purpose & road safety'],
      mediums: ['OOH & billboards'],
      hook: 'Real wrecked cars mounted on billboards.',
      headline: { value: '9M+', label: 'reach' },
      objective: 'Start a real conversation about drunk driving in the New Year season.',
      whatWeDid: 'Mounted real accident-damaged cars on billboards across Delhi, Gurugram and Pune.',
      results: [
        { value: '9M+', label: 'reach across Instagram, LinkedIn and X' },
        { value: '14', label: 'PR stories, 8 top-tier' }
      ],
      cover: 'dont-drink-drive-1.webp',
      gallery: ['dont-drink-drive-2.webp', 'dont-drink-drive-3.webp'],
      link: 'https://www.linkedin.com/posts/vipulsetia78_brandcampaign2025-marketing-advertising-activity-7411640467739729920-MaR0'
    },
    {
      id: 'dk-lifetime-warranty',
      title: 'DK on lifetime warranty',
      company: 'Cars24',
      date: '2025-11',
      when: 'Nov 2025',
      film: true,
      jobs: ['Trust & promises', 'Creators & influence'],
      mediums: ['Digital & social'],
      hook: 'A cricketer people trust, on a promise people doubt.',
      headline: { value: '5M+', label: 'reach' },
      objective: 'Explain lifetime warranty through a face cricket fans trust.',
      whatWeDid: 'A Dinesh Karthik collaboration on lifetime warranty, later carried into hub communication.',
      results: [
        { value: '5M+', label: 'reach' },
        { value: '1M+', label: 'views' },
        { value: '58K+', label: 'likes' },
        { value: '6', label: 'international cricketers engaged, incl. Eoin Morgan' }
      ],
      cover: 'dk-lifetime-warranty-1.webp',
      link: 'https://www.linkedin.com/posts/vipulsetia78_brandcampaign2025-marketing-cricket-activity-7393904913518555136-M8Yq'
    },
    {
      id: 'hyrox-mirror',
      title: 'The HYROX mirror',
      company: 'Cars24',
      date: '2026-04',
      when: 'Apr-Jul 2026',
      jobs: ['Moment marketing'],
      mediums: ['On-ground'],
      hook: '"Humans in the mirror are stronger than they appear."',
      headline: { value: '2M+', label: 'reach in Bengaluru · 30K+ footfall in Delhi' },
      objective: 'Earn a real moment at a fitness event without asking anyone to engage.',
      whatWeDid: 'An 8-ft rearview mirror at HYROX Bengaluru, then scaled to HYROX Delhi, that people stopped, read, posed with and shared.',
      results: [
        { value: '20K+', label: 'on-ground eyeballs in Bengaluru' },
        { value: '2M+', label: 'reach in Bengaluru' },
        { value: '30K+', label: 'footfall in Delhi' },
        { value: '493K', label: 'LinkedIn reach in Delhi' }
      ],
      cover: 'hyrox-mirror-1.webp',
      gallery: ['hyrox-mirror-2.webp'],
      link: 'https://www.linkedin.com/posts/vipulsetia78_hyrox-brand-campaign-activity-7449314284431441920-CFA5'
    },
    {
      id: 'creator-engine',
      title: 'The creator engine',
      company: 'Cars24',
      date: '2025-06',
      when: '2025 onwards',
      jobs: ['Creators & influence'],
      mediums: ['Digital & social'],
      hook: 'Content fit beats celebrity timing.',
      headline: { value: '₹0.08', label: 'per view · 229M views' },
      objective: 'Reach beyond auto enthusiasts at a low cost per view, then sharpen for intent.',
      whatWeDid: 'Built the creator program from zero across comedy, lifestyle and vlogging, tracked daily with budget moved to what works. Later shifted toward auto and finance creators, and signed Gagan Choudhary as influencer ambassador.',
      results: [
        { value: '229M', label: 'views' },
        { value: '₹0.06-0.08', label: 'cost per view in recent months' },
        { value: '30.3M', label: 'views in a single month' },
        { value: '13M+', label: 'views on top reels' }
      ],
      link: 'https://www.instagram.com/reel/DY7UL21OWcC/',
      linkText: 'Watch the top reel (13.6M views)',
      watch: [
        {
          title: 'Gagan Choudhary · 13.6M views',
          url: 'https://www.instagram.com/reel/DY7UL21OWcC/'
        },
        { title: 'Raghav · 13.1M views', url: 'https://www.instagram.com/reel/DcJCguLSq_p/' },
        { title: 'Rustam · 7.1M views', url: 'https://www.instagram.com/reel/DaUaPM1vr-B/' },
        {
          title: 'Flyingboyz · 6.1M views',
          url: 'https://www.instagram.com/reel/DTIMxshjWbP/'
        },
        { title: 'Mufasa · 5.7M views', url: 'https://www.instagram.com/reel/DaIFRhiTcq9/' },
        { title: 'Creator reel 1', url: 'https://www.instagram.com/reel/DOQhiSbkQ1H/' },
        { title: 'Creator reel 2', url: 'https://www.instagram.com/reel/DNS7H0qB2SH/' },
        { title: 'Creator reel 3', url: 'https://www.instagram.com/reel/DNVgEdWzrbV/' },
        { title: 'Creator reel 4', url: 'https://www.instagram.com/reel/DNVMLGryRgP/' },
        { title: 'Creator reel 5', url: 'https://www.instagram.com/reel/DOdeF-bjDuj/' },
        { title: 'Creator reel 6', url: 'https://www.instagram.com/p/DK4ZE2TPiNi/' },
        { title: 'Creator reel 7', url: 'https://www.instagram.com/reel/DNlFb1KT4TV/' },
        { title: 'Creator reel 8', url: 'https://www.instagram.com/reel/DOgJRlGk2Pz/' }
      ]
    },
    {
      id: 'hyfit-car-sled',
      title: 'The car became the sled',
      company: 'Cars24',
      date: '2025-11',
      when: 'Nov 2025',
      jobs: ['Moment marketing'],
      mediums: ['On-ground'],
      hook: 'At Hyfit, athletes pushed a Cars24 car instead of a sled.',
      headline: { value: '90%+', label: 'of 600+ attendees took part' },
      objective: 'Become part of the event, not a banner beside it.',
      whatWeDid: 'Replaced the traditional sled at Hyfit Bengaluru with a branded Cars24 car, which became the biggest attraction on the floor.',
      results: [{ value: '600+', label: 'attendees' }, { value: '90%+', label: 'took part' }],
      cover: 'hyfit-car-sled-1.webp',
      gallery: ['hyfit-car-sled-2.webp'],
      link: 'https://www.instagram.com/reels/DRTvmL5Es53/',
      linkText: 'Watch on Instagram'
    },
    {
      id: 'potholes',
      title: 'Fixing 500+ potholes',
      company: 'Cars24',
      date: '2025-08',
      when: 'Aug 2025',
      jobs: ['Purpose & road safety', 'Moment marketing'],
      mediums: ['On-ground'],
      hook: 'This anniversary fixed something for people.',
      headline: { value: '10M+', label: 'reach · e4m RetailEX 2026 winner' },
      objective: 'Mark 10 years by giving back, not talking about ourselves.',
      whatWeDid: "For Cars24's 10th birthday, we fixed 500+ potholes across cities.",
      results: [
        { value: '10M+', label: 'reach' },
        { value: '0', label: 'negative comments' },
        { value: '2,700+', label: 'Reddit upvotes' },
        { value: 'e4m', label: 'RetailEX 2026: Best Cause-Related Marketing' }
      ],
      cover: 'potholes-1.webp',
      gallery: ['potholes-2.webp', 'potholes-3.webp'],
      link: 'https://www.linkedin.com/posts/vipulsetia78_brand-marketing-potholes-activity-7360969956106162176-liua'
    },
    {
      id: 'ganpati-khetwadi',
      title: 'Bappa at Khetwadi',
      company: 'Cars24',
      date: '2025-09',
      when: 'Sep 2025',
      jobs: ['Moment marketing'],
      mediums: ['On-ground'],
      hook: 'Show up inside the moment, with a real role.',
      headline: { value: '1M+', label: 'on-ground reach' },
      objective: "Be part of Mumbai's biggest festival in a way devotees welcome.",
      whatWeDid: 'A Cars24 car carried Bappa during Visarjan at the iconic Khetwadi pandal, with tasteful, subtle branding.',
      results: [
        { value: '1M+', label: 'on-ground reach' },
        { value: '2L+', label: 'LinkedIn impressions' },
        { value: '100+', label: 'organic mentions' }
      ],
      cover: 'ganpati-khetwadi-1.webp',
      gallery: ['ganpati-khetwadi-2.webp'],
      link: 'https://www.linkedin.com/posts/vipulsetia78_ganpatibappamorya-marketing-brand-activity-7370725485682761728-nZBT'
    },
    {
      id: 'selfie-with-bappa',
      title: 'Selfie with Bappa',
      company: 'Cars24',
      date: '2026-09',
      when: 'Sep 2026',
      jobs: ['Moment marketing'],
      mediums: ['On-ground'],
      hook: "Bappa in the driver's seat, the co-pilot seat free for devotees.",
      headline: { value: '12 days', label: 'at Khetwadi Cha Raja' },
      objective: 'Return to Khetwadi with something devotees would want to be part of.',
      whatWeDid: "An open car shell with a Ganpati idol in the driver's seat and the co-pilot seat left free for devotees to sit and take a picture.",
      results: [{ value: '12', label: 'days live through Visarjan' }],
      cover: 'selfie-with-bappa-1.webp',
      gallery: ['selfie-with-bappa-2.webp'],
      link: 'https://www.linkedin.com/posts/vipulsetia78_marketing-branding-activity-7505522740351860736-lUFb'
    },
    {
      id: 'kids-colour-print',
      title: 'Let the kids colour the future',
      company: 'Cars24',
      date: '2025-07',
      when: 'Jul 2025',
      jobs: ['Purpose & road safety', 'Moment marketing'],
      mediums: ['Print'],
      hook: 'A print ad can be top-of-funnel too.',
      headline: { value: '2x', label: '"scrap cars" searches · 4M+ PR views' },
      objective: "Use Delhi's fuel ban on overage vehicles to drive scrapping, with a reason people feel.",
      whatWeDid: 'A full-page Delhi Times ad, "Let the kids colour the future", made from children\'s drawings.',
      results: [
        { value: '4M+', label: 'PR views, 14+ stories' },
        { value: '930K+', label: 'Instagram views' },
        { value: '385K+', label: 'LinkedIn impressions' },
        { value: '138', label: 'QR scans and 26 calls' }
      ],
      cover: 'kids-colour-print-1.webp',
      gallery: ['kids-colour-print-2.webp', 'kids-colour-print-3.webp'],
      link: 'https://www.linkedin.com/posts/vipulsetia78_this-wasnt-just-an-ad-it-was-a-mirror-activity-7347861236358750210-4qqb'
    },
    {
      id: 'fathers-day-parking',
      title: 'Parking spots for dads',
      company: 'Cars24',
      date: '2025-06',
      when: 'Jun 2025',
      jobs: ['Moment marketing'],
      mediums: ['On-ground', 'OOH & billboards'],
      hook: 'Reserved spots turned into reminders.',
      headline: { value: '3.6M+', label: 'PR views' },
      objective: "Make Father's Day felt in a car-buyer's everyday space.",
      whatWeDid: 'Reserved parking spots in Delhi and Bengaluru carried simple messages for dads.',
      results: [
        { value: '3.6M+', label: 'PR views, 13+ stories' },
        { value: '500K+', label: 'LinkedIn impressions' },
        { value: '225K+', label: 'Instagram views' }
      ],
      cover: 'fathers-day-parking-1.webp',
      gallery: ['fathers-day-parking-2.webp', 'fathers-day-parking-3.webp'],
      link: 'https://www.linkedin.com/posts/vipulsetia78_fathersday-marketingwithheart-cars24-activity-7339871801352589312-cqG0'
    },
    {
      id: 'dadas-billboard',
      title: 'Before ADAS, there are DADAS',
      company: 'Cars24',
      date: '2026-06',
      when: 'Jun 2026',
      jobs: ['Moment marketing'],
      mediums: ['OOH & billboards'],
      hook: 'Dads, our original driving assistants.',
      headline: { value: '8.5M', label: 'reach' },
      objective: "Own Father's Day with one line every driver gets.",
      whatWeDid: 'A high-impact Delhi billboard with a car extending beyond the frame.',
      results: [{ value: '8.5M', label: 'reach' }],
      cover: 'dadas-billboard-1.webp',
      link: 'https://www.linkedin.com/posts/vipulsetia78_fathersday-branding-ooh-activity-7474355394572623872-FfXd'
    },
    {
      id: 'park-your-bias',
      title: 'Park Your Bias',
      company: 'Cars24',
      date: '2025-03',
      when: 'Mar 2025',
      film: true,
      jobs: ['Purpose & road safety', 'Moment marketing'],
      mediums: ['Digital & social'],
      hook: 'A social experiment on bias against women drivers.',
      headline: { value: '~14M', label: 'PR reach' },
      objective: "Say something true on Women's Day, not just post a greeting.",
      whatWeDid: 'A social experiment exposing unconscious bias against women drivers.',
      results: [
        { value: '~14M', label: 'cumulative PR reach' },
        { value: '1M+', label: 'organic views' },
        { value: '680K', label: 'Instagram views' }
      ],
      cover: 'park-your-bias-1.webp',
      gallery: ['park-your-bias-2.webp'],
      link: 'https://www.youtube.com/watch?v=-Hp-gYOwS_Y',
      linkText: 'Watch on YouTube'
    },
    {
      id: 'genz-road-safety',
      title: 'Gen Z road-safety billboards',
      company: 'Cars24',
      date: '2025-01',
      when: 'Jan 2025',
      jobs: ['Purpose & road safety'],
      mediums: ['OOH & billboards', 'Digital & social'],
      hook: 'Safety advice in the voice Gen Z uses.',
      headline: { value: '2M+', label: 'Instagram reach' },
      objective: 'Make road safety land with young drivers.',
      whatWeDid: 'Witty billboards in Delhi and Gurugram, amplified through memes.',
      results: [
        { value: '2M+', label: 'Instagram reach' },
        { value: '1M+', label: 'LinkedIn reach' },
        { value: '25+', label: 'creators joined unpaid' }
      ],
      cover: 'genz-road-safety-1.webp',
      link: 'https://www.instagram.com/p/DErPb1SvYPY/',
      linkText: 'See it on Instagram'
    },
    {
      id: 'himesh-concert',
      title: 'Spotted at the Himesh concert',
      company: 'Cars24',
      date: '2025-07',
      when: 'Jul 2025',
      jobs: ['Moment marketing'],
      mediums: ['On-ground'],
      hook: 'A concert crowd as the stage, zero media.',
      headline: { value: '15K+', label: 'attendees' },
      objective: 'Be seen where the city gathers, without buying media.',
      whatWeDid: "Showed up at Himesh Reshammiya's live concert with copy built for the crowd.",
      results: [
        { value: '15K+', label: 'attendees' },
        { value: '1', label: 'organic Instagram story from Himesh' }
      ],
      cover: 'himesh-concert-1.webp',
      gallery: ['himesh-concert-2.webp'],
      link: 'https://www.linkedin.com/posts/vipulsetia78_branding-marketing-adgully-activity-7353280133547397120-O9lE'
    },
    {
      id: 'messi-goat',
      title: 'The Messi G.O.A.T. ambush',
      company: 'Cars24',
      date: '2025-12',
      when: 'Dec 2025',
      jobs: ['Moment marketing'],
      mediums: ['On-ground', 'Digital & social'],
      hook: 'Fans in goat masks on our real G.O.A.T. moves.',
      headline: { value: '₹0.12', label: 'CPM · 510K impressions' },
      objective: 'Ride the biggest sporting moment of the month with no big stage and no big spend.',
      whatWeDid: 'Fans in goat masks at the Messi G.O.A.T. Tour held boards calling out our real G.O.A.T. moves: 30-day return and lifetime warranty.',
      results: [
        { value: '510K', label: 'impressions' },
        { value: '366K', label: 'accounts reached' },
        { value: '₹0.12', label: 'CPM' }
      ],
      cover: 'messi-goat-1.webp',
      gallery: ['messi-goat-2.webp'],
      link: 'https://www.linkedin.com/posts/vipulsetia78_sometimes-the-smallest-ideas-make-the-loudest-activity-7406574095108116480-OJCK'
    },
    {
      id: 'girl-child-film',
      title: 'Save the Girl Child',
      company: 'Cars24',
      date: '2026-01',
      when: 'Jan 2026',
      film: true,
      jobs: ['Purpose & road safety', 'Brand building'],
      mediums: ['Brand films'],
      hook: 'The first brand film for our inspection business.',
      headline: { value: '7M+', label: 'reach · 45K+ shares' },
      objective: 'Launch a brand voice for the pre-delivery inspection business.',
      whatWeDid: 'Released the first brand film for PDI on National Girl Child Day.',
      results: [
        { value: '7M+', label: 'reach' },
        { value: '61K+', label: 'likes' },
        { value: '45K+', label: 'shares' }
      ],
      cover: 'girl-child-film-1.webp',
      link: 'https://www.linkedin.com/posts/vipulsetia78_brand-marketing-activity-7420382773431001088-kNQk'
    },
    {
      id: 'kids-drawings',
      title: "Kids' drawings on billboards",
      company: 'Cars24',
      date: '2025-11',
      when: 'Nov 2025',
      jobs: ['Moment marketing'],
      mediums: ['OOH & billboards'],
      hook: "Customers' kids drew their dream cars.",
      headline: { value: '25', label: 'billboards and screens in Delhi' },
      objective: "Make Children's Day about our customers' families.",
      whatWeDid: 'Real drawings by children whose parents bought from us became billboards in GK-2, Golf Course Road and Punjabi Bagh, plus 22 digital screens at CyberHub.',
      results: [{ value: '3', label: 'billboards' }, { value: '22', label: 'digital OOH sites' }],
      cover: 'kids-drawings-1.webp',
      gallery: ['kids-drawings-2.webp'],
      link: 'https://www.linkedin.com/posts/vipulsetia78_marketing-branding-exchange4media-activity-7395343580049039360-BtLE'
    },
    {
      id: 'hub-launches',
      title: 'Hub launches as events',
      company: 'Cars24',
      date: '2025-01',
      when: '2025',
      jobs: ['Growth & retail'],
      mediums: ['On-ground', 'OOH & billboards'],
      hook: 'Balloons visible from 1km, local creators, nearby hoardings.',
      headline: { value: '17', label: 'hubs on one playbook' },
      objective: 'Make every new hub a local event, with a repeatable playbook.',
      whatWeDid: 'Helium balloons visible from 1km, roadshows, local creators and hoardings around each new hub, plus a retail rebrand.',
      results: [{ value: '17', label: 'hubs launched' }, { value: '+15%', label: 'monthly hub sales' }],
      cover: 'hub-launches-1.webp',
      gallery: ['hub-launches-2.webp', 'hub-launches-3.webp', 'hub-launches-4.webp'],
      link: 'https://www.linkedin.com/posts/vikram6_we-spent-the-last-few-months-reimagining-activity-7349329310656184320-F7AU',
      linkText: 'See the hub revamp post'
    },
    {
      id: 'zomato-har-customer-star',
      title: 'Har Customer Hai Star',
      company: 'Zomato',
      date: '2021-04',
      when: 'Zomato, 2019-21',
      film: true,
      jobs: ['Brand building'],
      mediums: ['Brand films'],
      hook: 'Every customer is the star.',
      headline: { value: '2 stars', label: 'Hrithik Roshan and Katrina Kaif' },
      objective: 'Put the customer, not the brand, at the centre of the story.',
      whatWeDid: "Zomato's 'Har Customer Hai Star' brand films starring Hrithik Roshan and Katrina Kaif.",
      results: [
        { value: '2', label: 'star-led films' },
        { value: 'Hrithik & Katrina', label: 'as the faces of the campaign' }
      ],
      cover: 'zomato-har-customer-star-1.webp',
      gallery: [
        {
          image: 'zomato-har-customer-star-1.webp',
          video: 'https://www.youtube.com/watch?v=dXirvvVXXWA',
          caption: 'Har Customer Hai Star ft. Hrithik Roshan'
        },
        {
          image: 'zomato-har-customer-star-2.webp',
          video: 'https://www.youtube.com/watch?v=PpNdfDM4xhc',
          caption: 'Har Customer Hai Star ft. Katrina Kaif'
        }
      ],
      link: 'https://www.youtube.com/watch?v=dXirvvVXXWA',
      linkText: 'Watch on YouTube'
    },
    {
      id: 'fitso-swim-films',
      title: 'Fitso Seals swim films',
      company: 'Zomato',
      date: '2020-01',
      when: 'Zomato, 2019-21',
      film: true,
      jobs: ['Brand building', 'Growth & retail'],
      mediums: ['Brand films', 'Digital & social'],
      hook: 'Swimming as the answer to city life.',
      headline: { value: '5 films', label: 'for Fitso Seals swimming' },
      objective: 'Make swimming feel like an everyday fitness habit for city families, and fill Fitso Seals pools.',
      whatWeDid: "A film series for Fitso Seals, Zomato's swimming arm: 'Tired of traffic? Swim hassle-free', 'Flappy legs or tappy feet', 'Life is better when you're swimming', 'Calender' and 'Funny Guy'.",
      results: [
        { value: '5', label: 'brand films' },
        { value: '37→58%', label: 'facility utilisation' },
        { value: '₹23K→₹23L', label: 'Pay & Play revenue a month' }
      ],
      cover: 'fitso-swim-films-1.webp',
      gallery: [
        {
          image: 'fitso-swim-films-1.webp',
          video: 'https://youtu.be/fGHu_CdA-KM',
          caption: 'Tired of traffic? Swim hassle-free'
        },
        {
          image: 'fitso-swim-films-2.webp',
          video: 'https://youtu.be/7ZR4ayZHQgM',
          caption: 'Flappy legs or tappy feet'
        },
        {
          image: 'fitso-swim-films-3.webp',
          video: 'https://youtu.be/rUs1E5N0_V0',
          caption: 'Life is better when you are swimming'
        },
        {
          image: 'fitso-swim-films-4.webp',
          video: 'https://youtu.be/3tc9rdlcLbM',
          caption: 'Calender'
        },
        {
          image: 'fitso-swim-films-5.webp',
          video: 'https://youtu.be/YFiItMX24yo',
          caption: 'Funny Guy'
        }
      ],
      link: 'https://youtu.be/fGHu_CdA-KM',
      linkText: 'Watch on YouTube'
    },
    {
      id: 'apna-kaam-aayega',
      title: 'Apna Kaam Aayega',
      company: 'Apna',
      date: '2023-01',
      when: 'Apna, 2022-24',
      film: true,
      jobs: ['Brand building'],
      mediums: ['Brand films'],
      hook: 'A job is dignity and progress, not a listing.',
      headline: { value: '150M+', label: 'reach · 2x TOMA · CAC -35%' },
      objective: "Build Apna's first brand and bring down rising acquisition costs.",
      whatWeDid: "Apna's first brand campaign across TV, OTT and YouTube, on the T20 World Cup and India cricket.",
      results: [
        { value: '150M+', label: 'reach' },
        { value: '2x', label: 'top-of-mind awareness' },
        { value: '3.5x', label: 'consideration' },
        { value: '-35%', label: 'CAC' }
      ],
      cover: 'apna-kaam-aayega-1.webp',
      gallery: [
        {
          image: 'apna-ad-1.webp',
          video: 'https://www.youtube.com/watch?v=P39dfAYBT8A',
          caption: 'Ab job milegi khud ke dum par'
        },
        {
          image: 'apna-ad-2.webp',
          video: 'https://www.youtube.com/watch?v=Srpux1uJu9s',
          caption: 'Ghar ke paas job pao'
        },
        {
          image: 'apna-ad-3.webp',
          video: 'https://youtu.be/FOqM8umP0do',
          caption: 'A great career starts here'
        }
      ],
      link: 'https://youtu.be/VfRraeV8HmE',
      linkText: 'Watch on YouTube',
      watch: [
        { title: 'Apna Kaam Aayega · main film', url: 'https://youtu.be/VfRraeV8HmE' },
        { title: 'Apna reel 1', url: 'https://www.instagram.com/reel/C7l_WblvMth/' },
        { title: 'Apna reel 2', url: 'https://www.instagram.com/reel/C7T8JxCvnv0/' }
      ]
    },
    {
      id: 'hustle-chal-rha-hai',
      title: 'Hustle Chal Rha Hai',
      company: 'Apna',
      date: '2024-01',
      when: 'Apna, 2022-24',
      film: true,
      jobs: ['Brand building'],
      mediums: ['Brand films'],
      hook: 'Spoke in the voice of white-collar job seekers.',
      headline: { value: '13→31%', label: 'white-collar share of users' },
      objective: 'Bring white-collar job seekers to a platform built for blue-collar jobs.',
      whatWeDid: 'A repositioning campaign in the bold voice white-collar job seekers use about themselves.',
      results: [
        { value: '45M+', label: 'reach' },
        { value: '13→31%', label: 'white-collar share of users' }
      ],
      cover: 'hustle-chal-rha-hai-1.webp',
      gallery: [
        {
          image: 'apna-ad-1.webp',
          video: 'https://www.youtube.com/watch?v=P39dfAYBT8A',
          caption: 'Ab job milegi khud ke dum par'
        },
        {
          image: 'apna-ad-2.webp',
          video: 'https://www.youtube.com/watch?v=Srpux1uJu9s',
          caption: 'Ghar ke paas job pao'
        }
      ],
      link: 'https://www.youtube.com/watch?v=XGAhv-e_dAM',
      linkText: 'Watch on YouTube',
      watch: [
        {
          title: 'Hustle Chal Rha Hai · main film',
          url: 'https://www.youtube.com/watch?v=XGAhv-e_dAM'
        }
      ]
    },
    {
      id: 'youtube-job-fair',
      title: "India's first YouTube Job Fair",
      company: 'Apna',
      date: '2023-06',
      when: 'Apna, 2022-24',
      jobs: ['Creators & influence', 'Growth & retail'],
      mediums: ['Digital & social'],
      hook: '150+ job creators went live together.',
      headline: { value: '3M+', label: 'YouTube viewers in a day' },
      objective: 'Reach job seekers where they already learn about jobs.',
      whatWeDid: '150+ job creators went live together on YouTube.',
      results: [
        { value: '3M+', label: 'YouTube viewers in a day' },
        { value: '150+', label: 'creators' }
      ]
    },
    {
      id: 'in-film-collabs',
      title: 'In-film collaborations',
      company: 'Apna',
      date: '2023-03',
      when: 'Apna, 2022-24',
      jobs: ['Creators & influence', 'Growth & retail'],
      mediums: ['Brand films'],
      hook: 'Brand integrations inside long-running films.',
      headline: { value: '-38%', label: 'CAC' },
      objective: 'Find cheaper, longer-living reach than ads.',
      whatWeDid: 'Brand integrations inside long-running films.',
      results: [{ value: '-38%', label: 'CAC' }, { value: '-40%', label: 'production cost' }],
      link: 'https://www.instagram.com/reel/C7gyriDPGdR/',
      linkText: 'Watch on Instagram',
      watch: [
        { title: 'In-film integration 1', url: 'https://www.instagram.com/reel/C7gyriDPGdR/' },
        { title: 'In-film integration 2', url: 'https://www.instagram.com/reel/C6fc2PTvtUm/' }
      ]
    }
  ],

  // Career tab, oldest first.
  career: [
    {
      year: '2017',
      company: 'Urban Company',
      role: 'Category Manager',
      summary: 'Full-stack launches; category revenue 4.5x.',
      color: 'yellow'
    },
    {
      year: '2018',
      company: 'Pristyn Care',
      role: 'Category Manager',
      summary: 'Built a vertical to ~₹7.5 Cr a month with a 15-member team.',
      color: 'pink'
    },
    {
      year: '2019',
      company: 'Zomato',
      role: 'Senior Manager, Marketing',
      summary: 'Pay & Play from ₹23K to ₹23L a month.',
      color: 'green'
    },
    {
      year: '2022',
      company: 'Apna',
      role: 'Senior Manager, Brand & Growth',
      summary: 'First brand campaign; CAC down 35%, retention up 57%.',
      color: 'blue'
    },
    {
      year: '2025',
      company: 'Cars24',
      role: 'Head of Brand Marketing',
      summary: 'Brand strategy, identity, creative and measurement.',
      color: 'yellow'
    }
  ],

  // Recognition notes on the Career tab.
  awards: [
    {
      title: 'SAMMIE Awards 2026',
      detail: 'Best Use of Technology in Marketing (challan billboard)',
      link: 'https://www.linkedin.com/posts/vipulsetia78_branding-marketing-activity-7488841709590814720-xGQm',
      color: 'yellow',
      tilt: -1.5
    },
    {
      title: 'afaqs! Digital Evangelist',
      detail: 'Personal award',
      link: 'https://www.linkedin.com/posts/vipulsetia78_branding-marketing-awards-activity-7498594909076119552-5_PF',
      color: 'pink',
      tilt: 1
    },
    {
      title: 'e4m RetailEX Awards 2026',
      detail: 'Best Cause-Related Marketing Campaign (pothole drive)',
      link: 'https://www.linkedin.com/posts/vipulsetia78_marketing-branding-campaigns-activity-7450401988279767041-Yn6b',
      color: 'blue',
      tilt: -1
    },
    {
      title: 'NRSTC 2026, IIT Bombay',
      detail: 'Selected among 17 national road-safety solutions',
      color: 'green',
      tilt: 1.5
    },
    {
      title: 'Google for Business India',
      detail: 'Case study on our regional-language CTV',
      color: 'yellow',
      tilt: -1
    },
    {
      title: 'Juror',
      detail: 'afaqs! Foxglove 2026; Indian School of Business (ISB), Mohali',
      color: 'blue',
      tilt: -1.5
    },
    {
      title: 'Speaker',
      detail: 'Social Samosa, Mesa School, ET BrandEquity MarTech+, Brand India Summit 2026',
      link: 'https://www.linkedin.com/posts/vipulsetia78_festival-marketing-branding-activity-7506574533441617920-xKIe',
      color: 'green',
      tilt: 1
    }
  ]
};
