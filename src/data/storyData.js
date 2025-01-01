// src/data/storyData.js

const storyData = {
  intro: {
    text: "سال‌ها پیش، دنیا زیر سایه‌ی یک جنگ هسته‌ای عظیم فرو ریخت...",
    choices: [
      { text: "شروع داستان", next: "node1", type: "primary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/1.webp`,
  },
  node1: {
    text: "وهرام روی بلندی یک تپه خاکی ایستاده بود...",
    choices: [
      { text: "به داخل سایت برو", next: "node2", type: "primary" },
      { text: "اطراف سایت را بررسی کن", next: "node1_1", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/2.webp`,
  },
  node1_1: {
    text: "وهرام تصمیم گرفت ابتدا اطراف سایت را بررسی کند...",
    choices: [
      { text: "وارد سایت شو", next: "node2", type: "primary" },
      { text: "در اطراف جستجوی بیشتری انجام بده", next: "node1_2", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/3.webp`,
  },
  node1_2: {
    text: "در حین جستجوی اطراف، صدای پای چند نفر از سمت پشت تپه شنیده شد...",
    choices: [
      { text: "پنهان شو", next: "node1_3", type: "danger" },
      { text: "مخفیانه وارد سایت شو", next: "node2", type: "primary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/4.webp`,
  },
  node1_3: {
    text: "وهرام پشت یک صخره بزرگ پنهان شد...",
    choices: [
      { text: "به دنبال آن‌ها وارد سایت شو", next: "node2", type: "primary" },
      { text: "منتظر بمان", next: "node1_4", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/5.webp`,
  },
  node1_4: {
    text: "وهرام منتظر ماند تا غارتگران از سایت دور شوند...",
    choices: [
      { text: "به داخل سایت برو", next: "node2", type: "primary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/6.webp`,
  },
  node2: {
    text: "وارد شدن به سایت، مثل ورود به دنیای ارواح بود...",
    choices: [
      { text: "مستقیماً به سمت اتاق رآکتور برو", next: "node3", type: "primary" },
      { text: "ابتدا محیط را بررسی کن", next: "node2_1", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/7.webp`,
  },
  node2_1: {
    text: "وهرام به یکی از دفاتر قدیمی سایت سر زد و روی میز پوسیده‌ای یک دفترچه پیدا کرد...",
    choices: [
      { text: "به سمت اتاق رآکتور برو", next: "node3", type: "primary" },
      { text: "دفترچه را بررسی کن و اطلاعات بیشتری جمع‌آوری کن", next: "node2_2", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/8.webp`,
  },
  node2_2: {
    text: "وهرام تصمیم گرفت وقت بگذارد و اطلاعات دفترچه را بررسی کند...",
    choices: [
      { text: "اتاق مخفی را پیدا کن", next: "node2_3", type: "primary" },
      { text: "به سمت اتاق رآکتور برو", next: "node3", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/9.webp`,
  },
  node2_3: {
    text: "وهرام با استفاده از نقشه، دریچه‌ای را در کف یکی از سالن‌های متروکه پیدا کرد...",
    choices: [
      { text: "تجهیزات را بررسی کن", next: "node2_4", type: "secondary" },
      { text: "مستقیماً به اتاق رآکتور برو", next: "node3", type: "primary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/10.webp`,
  },
  node2_4: {
    text: "وهرام تجهیزات را بررسی کرد و متوجه شد که این تجهیزات می‌توانند در بازسازی زیرساخت‌ها بسیار مفید باشند...",
    choices: [
      { text: "به سمت اتاق رآکتور برو", next: "node3", type: "primary" },
      { text: "ادامه به بررسی تجهیزات دیگر", next: "node2_5", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/11.webp`,
  },
  node2_5: {
    text: "در حین بررسی تجهیزات، وهرام صدای نزدیکی را شنید...",
    choices: [
      { text: "فشار بیاور و سریع تجهیزات را بردارد", next: "node3_1", type: "danger" },
      { text: "مخفیانه تجهیزات را جا بگذارد و فرار کند", next: "node4", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/12.webp`,
  },
  node3: {
    text: "به اتاق رآکتور رسید. در، با صدای وحشتناکی باز شد و او وارد فضایی شد که بوی فلز و سوختگی غلیظ‌تر بود.",
    choices: [
      { text: "دستگاه را بردار و سایت را ترک کن", next: "node4", type: "primary" },
      { text: "به جستجو ادامه بده", next: "node3_1", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/13.webp`,
  },
  node3_1: {
    text: "وهرام تصمیم گرفت محیط را بیشتر بررسی کند و در گوشه‌ای از اتاق، مخزن انرژی نیمه‌فعالی را پیدا کرد...",
    choices: [
      { text: "مخزن را فعال کن", next: "node4_1", type: "danger" },
      { text: "از مخزن دور شو و دستگاه را بردار", next: "node4", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/14.webp`,
  },
  node4: {
    text: "وهرام دستگاه را برداشت و تصمیم گرفت به سرعت از سایت خارج شود...",
    choices: [
      { text: "به سایه نزدیک شو", next: "node4_1", type: "danger" },
      { text: "از راه دیگری فرار کن", next: "node5", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/15.webp`,
  },
  node4_1: {
    text: "وهرام مخزن را فعال کرد. ناگهان نور سبزرنگی کل اتاق را فرا گرفت و لرزش‌های شدیدی در ساختمان ایجاد شد...",
    choices: [
      { text: "از سایت فرار کن", next: "node5", type: "primary" },
      { text: "به بررسی ادامه بده", next: "node6", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/16.webp`,
  },
  node5: {
    text: "وهرام به سایه نزدیک شد و متوجه شد که این یک ربات قدیمی است...",
    choices: [
      { text: "ربات را غیرفعال کن", next: "node6", type: "danger" },
      { text: "با ربات صحبت کن", next: "node7", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/17.webp`,
  },
  node6: {
    text: "وهرام تلاش کرد از سایت فرار کند، اما گروهی از کلاغ‌های سیاه در کمین او بودند...",
    choices: [
      { text: "با آن‌ها مبارزه کن", next: "node8", type: "danger" },
      { text: "پنهان شو", next: "node9", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/18.webp`,
  },
  node7: {
    text: "ربات با صدای مکانیکی گفت: 'تو اجازه ورود به اینجا را نداری. هدف خود را مشخص کن.'",
    choices: [
      { text: "گفتن حقیقت", next: "node10", type: "primary" },
      { text: "دروغ گفتن و فریب ربات", next: "node11", type: "danger" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/19.webp`,
  },
  node8: {
    text: "وهرام با استفاده از ابزاری که در کوله داشت، موفق شد یکی از کلاغ‌های سیاه را زمین‌گیر کند...",
    choices: [
      { text: "به سمت کوه فرار کن", next: "node12", type: "primary" },
      { text: "مبارزه را ادامه بده", next: "node13", type: "danger" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/20.webp`,
  },
  node9: {
    text: "وهرام پشت تخته‌سنگی پنهان شد و کلاغ‌های سیاه بدون متوجه شدن از او عبور کردند...",
    choices: [
      { text: "به سمت زاگرس ادامه بده", next: "node14", type: "primary" },
      { text: "به کمپ اصلی کلاغ‌ها نزدیک شو", next: "node15", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/21.webp`,
  },
  node10: {
    text: "وهرام تصمیم گرفت حقیقت را بگوید: 'من دنبال راهی برای احیای زندگی هستم و می‌خواهم از این انرژی پایدار استفاده کنم تا دنیای ویران‌شده را بازسازی کنم.'",
    choices: [
      { text: "پیشنهاد همکاری بده", next: "node16", type: "primary" },
      { text: "از سایت فرار کن", next: "node17", type: "danger" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/22.webp`,
  },
  node11: {
    text: "وهرام به ربات گفت که تنها یک مسافر است و به دنبال پناهگاهی برای زنده ماندن می‌گردد...",
    choices: [
      { text: "اطلاعات جعلی ارائه بده", next: "node18", type: "danger" },
      { text: "واقعیت را درباره مخزن انرژی بگو", next: "node19", type: "primary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/23.webp`,
  },
  node12: {
    text: "وهرام به سرعت به سمت کوه‌ها فرار کرد...",
    choices: [
      { text: "به مسیر زاگرس ادامه بده", next: "node21", type: "primary" },
      { text: "به دنبال متحدین بیشتر بگرد", next: "node21", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/24.webp`,
  },
  node13: {
    text: "مبارزه ادامه یافت و وهرام با سختی توانست چند نفر از کلاغ‌های سیاه را شکست دهد...",
    choices: [
      { text: "به سمت تونل‌های زیرزمینی فرار کن", next: "node22", type: "primary" },
      { text: "پنهان شو و منتظر بمان", next: "node23", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/25.webp`,
  },
  node14: {
    text: "وهرام به مسیر خود ادامه داد و از سایت دور شد.",
    choices: [
      { text: "به مسیر زاگرس ادامه بده", next: "node21", type: "primary" },
      { text: "به دنبال سرنخ‌های دیگر بگرد", next: "node24", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/26.webp`,
  },
  node15: {
    text: "وهرام تصمیم گرفت به کمپ اصلی کلاغ‌ها نزدیک شود تا بتواند اطلاعات بیشتری درباره آن‌ها کسب کند.",
    choices: [
      { text: "مخفیانه به کمپ نزدیک شو", next: "node25", type: "secondary" },
      { text: "مستقیماً وارد کمپ شو", next: "node26", type: "danger" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/27.webp`,
  },
  node16: {
    text: "ربات با دقت گفت: 'اگر همکاری کنی، شاید بتونیم با هم به اهدافمان برسیم.'",
    choices: [
      { text: "پیشنهاد همکاری را قبول کن", next: "node27", type: "success" },
      { text: "پیشنهاد را رد کن و فرار کن", next: "node28", type: "danger" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/28.webp`,
  },
  node17: {
    text: "وهرام تصمیم گرفت به سرعت از سایت فرار کند...",
    choices: [
      { text: "به سمت زاگرس ادامه بده", next: "node20", type: "primary" },
      { text: "به دنبال سرنخ‌های دیگر بگرد", next: "node24", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/29.webp`,
  },
  node18: {
    text: "وهرام اطلاعات جعلی درباره یافتن چیزی در سایت متروکه ارائه داد...",
    choices: [
      { text: "فرار کن و به مسیر خود ادامه بده", next: "node29", type: "primary" },
      { text: "در کمپ کلاغ‌ها اطلاعات جمع‌آوری کن", next: "node30", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/30.webp`,
  },
  node19: {
    text: "وهرام حقیقت را درباره مخزن انرژی گفت و توضیح داد که این انرژی می‌تواند به بازسازی دنیا کمک کند...",
    choices: [
      { text: "پیشنهاد همکاری بده", next: "node31", type: "success" },
      { text: "از سایت فرار کن", next: "node29", type: "danger" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/31.webp`,
  },
  node20: {
    text: "وهرام مسیر خود را به سمت زاگرس ادامه داد...",
    choices: [
      { text: "به مسیر زاگرس ادامه بده", next: "node21", type: "primary" },
      { text: "به دنبال تجهیزات بیشتر در کمپ متروکه بگرد", next: "node20_1", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/32.webp`,
  },
  node20_1: {
    text: "وهرام در کمپ متروکه وسایل قدیمی از جمله یک سلاح ابتدایی و مقداری آب پیدا کرد...",
    choices: [
      { text: "پنهان شو و منتظر باش تا خطر رفع شود", next: "node20_2", type: "secondary" },
      { text: "کمپ را سریع ترک کن و به مسیر زاگرس ادامه بده", next: "node21", type: "primary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/33.webp`,
  },
  node20_2: {
    text: "وهرام در سایه یکی از چادرهای متروکه پنهان شد...",
    choices: [
      { text: "به سمت زاگرس ادامه بده", next: "node21", type: "primary" },
      { text: "به دنبال بازماندگان جدید بگرد", next: "node22", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/34.webp`,
  },
  node21: {
    text: "وهرام به کمپ متروکه رسید...",
    choices: [
      { text: "کمپ را به‌دقت جستجو کن", next: "node21_1", type: "primary" },
      { text: "کمپ را ترک کن و به سمت زاگرس ادامه بده", next: "node22", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/35.webp`,
  },
  node21_1: {
    text: "وهرام در میان بقایای کمپ، یک دستگاه قدیمی و آسیب‌دیده پیدا کرد...",
    choices: [
      { text: "به سیگنال‌ها توجه کن و مسیرت را تغییر بده", next: "node21_2", type: "primary" },
      { text: "دستگاه را بردار و به مسیر اصلی زاگرس ادامه بده", next: "node22", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/36.webp`,
  },
  node21_2: {
    text: "وهرام مسیر سیگنال‌های رادیویی را دنبال کرد و به یک ایستگاه مخفی در دل بیابان رسید...",
    choices: [
      { text: "سیستم‌های ایستگاه را فعال کن", next: "node21_3", type: "primary" },
      { text: "ایستگاه را ترک کن و به مسیر خود ادامه بده", next: "node22", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/37.webp`,
  },
  node21_3: {
    text: "وهرام با استفاده از ابزارهایش توانست بخشی از سیستم‌های ایستگاه را روشن کند...",
    choices: [
      { text: "به کمپ دژ بپیوند و با مقاومت همراه شو", next: "node22_1", type: "primary" },
      { text: "مستقیماً به مخزن انرژی زاگرس برو", next: "node22", type: "danger" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/38.webp`,
  },
  node22: {
    text: "وهرام تصمیم گرفت مسیر خود را به سمت زاگرس ادامه دهد...",
    choices: [
      { text: "حقیقت را بگو و پیشنهاد همکاری بده", next: "node23", type: "primary" },
      { text: "دروغ بگو و تظاهر کن که یک مسافر بی‌گناه هستی", next: "node24", type: "danger" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/39.webp`,
  },
  node22_1: {
    text: "وهرام به کمپ دژ پیوست و با گروه مقاومت روبه‌رو شد...",
    choices: [
      { text: "با مقاومت همکاری کن و نقشه‌ای برای حمله به کلاغ‌ها طراحی کن", next: "node22_1_1", type: "primary" },
      { text: "مخفیانه اطلاعات جمع کن و به مسیر خود ادامه بده", next: "node22_2", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/40.webp`,
  },
  node22_1_1: {
    text: "نسا و وهرام نقشه‌ای برای حمله به کمپ کلاغ‌ها طراحی کردند...",
    choices: [
      { text: "مستقیماً در حمله شرکت کن", next: "node25", type: "primary" },
      { text: "به تنهایی به دنبال تیمور برو", next: "node24", type: "danger" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/41.webp`,
  },
  node22_2: {
    text: "وهرام مخفیانه اطلاعات جمع‌آوری کرد و تصمیم گرفت به مسیر خود ادامه دهد تا بتواند به تنهایی مخزن انرژی را نابود کند...",
    choices: [
      { text: "مخزن را نابود کن", next: "node25", type: "danger" },
      { text: "اطلاعات را به مقاومت منتقل کن", next: "node23", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/42.webp`,
  },
  node23: {
    text: "وهرام حقیقت را درباره مخزن انرژی گفت و توضیح داد که این انرژی می‌تواند به بازسازی دنیا کمک کند...",
    choices: [
      { text: "همکاری با تیمور برای رسیدن به مخزن انرژی", next: "node26", type: "success" },
      { text: "نقشه‌ای برای فریب او طراحی کن", next: "node27", type: "danger" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/43.webp`,
  },
  node24: {
    text: "وهرام با تیمور گفت که تنها یک مسافر است و به دنبال پناهگاهی برای زنده ماندن می‌گردد...",
    choices: [
      { text: "اطلاعات جعلی ارائه بده", next: "node28", type: "danger" },
      { text: "واقعیت را درباره مخزن انرژی بگو", next: "node29", type: "primary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/44.webp`,
  },
  node25: {
    text: "وهرام با استفاده از دانش و ابزارهایش موفق شد مخزن انرژی را نابود کند...",
    choices: [
      { text: "به مسیر خود ادامه بده و از منطقه دور شو", next: "end5", type: "primary" },
      { text: "به سمت گروه مقاومت برو و درباره موفقیت خود گزارش بده", next: "node30", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/45.webp`,
  },
  node26: {
    text: "وهرام با تیمور همراه شد...",
    choices: [
      { text: "دستگاه را فعال کن و تیمور را فریب بده", next: "node30_1", type: "danger" },
      { text: "دستگاه را نابود کن و از انرژی برای نابودی تیمور استفاده کن", next: "node30_2", type: "danger" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/46.webp`,
  },
  node27: {
    text: "وهرام نقشه‌ای برای فریب تیمور طراحی کرد...",
    choices: [
      { text: "انفجار را فعال کن و از هرج‌ومرج استفاده کن تا فرار کنی", next: "node30_3", type: "danger" },
      { text: "منتظر بمان و از نزدیک رفتار تیمور را زیر نظر بگیر", next: "node30_4", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/47.webp`,
  },
  node28: {
    text: "وهرام اطلاعات جعلی درباره یافتن چیزی در سایت متروکه ارائه داد...",
    choices: [
      { text: "فرار کن و به مسیر خود ادامه بده", next: "node29", type: "primary" },
      { text: "در کمپ کلاغ‌ها اطلاعات جمع‌آوری کن", next: "node30", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/48.webp`,
  },
  node29: {
    text: "وهرام تصمیم گرفت حقیقت را درباره مخزن انرژی بگوید و توضیح داد که این انرژی می‌تواند به بازسازی دنیا کمک کند...",
    choices: [
      { text: "همکاری با تیمور برای رسیدن به مخزن انرژی", next: "node26", type: "success" },
      { text: "از سایت فرار کن", next: "node30_5", type: "danger" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/49.webp`,
  },
  node30: {
    text: "وهرام به گروه مقاومت پیوست و تصمیم گرفت با همکاری آن‌ها حمله‌ای نهایی به کلاغ‌های سیاه ترتیب دهد...",
    choices: [
      { text: "حمله به کلاغ‌ها", next: "end5", type: "primary" },
      { text: "مذاکره با کلاغ‌ها", next: "end6", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/50.webp`,
  },
  node30_1: {
    text: "وهرام دستگاه را فعال کرد و تیمور را فریب داد...",
    choices: [
      { text: "انفجار را فعال کن و از هرج‌ومرج استفاده کن تا فرار کنی", next: "end5", type: "danger" },
      { text: "منتظر بمان و از نزدیک رفتار تیمور را زیر نظر بگیر", next: "node30_4", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/51.webp`,
  },
  node30_2: {
    text: "وهرام تصمیم گرفت دستگاه را نابود کند و از انرژی برای نابودی تیمور استفاده کند...",
    choices: [
      { text: "به مسیر خود ادامه بده و از منطقه دور شو", next: "end5", type: "primary" },
      { text: "به سمت گروه مقاومت برو و درباره موفقیت خود گزارش بده", next: "node30", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  node30_3: {
    text: "وهرام انفجار را فعال کرد و از هرج‌ومرج استفاده کرد تا فرار کند...",
    choices: [
      { text: "به مسیر خود ادامه بده و از منطقه دور شو", next: "end5", type: "primary" },
      { text: "به سمت گروه مقاومت برو و درباره موفقیت خود گزارش بده", next: "node30", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  node30_4: {
    text: "وهرام منتظر ماند تا تیمور جزئیات نقشه‌اش را فاش کند...",
    choices: [
      { text: "نقشه را نابود کن و انرژی را برای استفاده تیمور غیرقابل دسترس کن", next: "node30_6", type: "danger" },
      { text: "منتظر فرصت مناسب برای حمله باش", next: "node30_7", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  node30_5: {
    text: "وهرام با سرعت از کمپ خارج شد و به مسیر خود ادامه داد...",
    choices: [
      { text: "به مسیر زاگرس ادامه بده", next: "node21", type: "primary" },
      { text: "به دنبال سرنخ‌های دیگر بگرد", next: "node24", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  node30_6: {
    text: "وهرام نقشه را نابود کرد و انرژی را برای استفاده تیمور غیرقابل دسترس کرد...",
    choices: [
      { text: "از هرج‌ومرج استفاده کن و فرار کن", next: "end5", type: "primary" },
      { text: "تلاش کن تیمور را در هرج‌ومرج از بین ببری", next: "node30_8", type: "danger" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  node30_7: {
    text: "وهرام تصمیم گرفت منتظر فرصت مناسب برای حمله باشد...",
    choices: [
      { text: "به مسیر خود ادامه بده و از منطقه دور شو", next: "end5", type: "primary" },
      { text: "به سمت گروه مقاومت برو و درباره موفقیت خود گزارش بده", next: "node30", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  node30_8: {
    text: "در هرج‌ومرج، وهرام موفق شد با استفاده از یک قطعه فلزی، تیمور را از پا درآورد...",
    choices: [
      { text: "از کمپ کلاغ‌ها برای یافتن تجهیزات و اطلاعات استفاده کن", next: "node30_9", type: "primary" },
      { text: "کمپ را ترک کن و به مسیر خود ادامه بده", next: "end5", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  node30_9: {
    text: "وهرام در کمپ کلاغ‌ها موفق شد به تجهیزات پیشرفته‌ای دست پیدا کند...",
    choices: [
      { text: "به سایت خلیج فارس برو", next: "node31", type: "primary" },
      { text: "به دنبال سرنخ‌های دیگر در زاگرس بگرد", next: "node21", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  node31: {
    text: "وهرام به سایت جدیدی در نزدیکی خلیج فارس رسید...",
    choices: [
      { text: "به بررسی دقیق سایت بپرداز", next: "node31_1", type: "primary" },
      { text: "به دنبال تجهیزات بگرد تا سایت را ایمن‌تر کنی", next: "node31_2", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  node31_1: {
    text: "در میان بقایای سایت، وهرام موفق شد به اطلاعاتی درباره یک پروژه پیشرفته دست پیدا کند...",
    choices: [
      { text: "به دنبال متحدین برای ادامه کار بگرد", next: "node32", type: "primary" },
      { text: "مستقیماً روی پروژه کار کن", next: "node33", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  node31_2: {
    text: "وهرام به دنبال تجهیزات بیشتری گشت تا سایت را ایمن‌تر کند...",
    choices: [
      { text: "سیستم فیلتر را نصب کن و سایت را ایمن‌تر کن", next: "node31_3", type: "success" },
      { text: "تجهیزات را برای استفاده بعدی ذخیره کن", next: "node31_4", type: "secondary" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  node31_3: {
    text: "وهرام سیستم فیلتر را نصب کرد و سایت را ایمن‌تر کرد...",
    choices: [
      { text: "به گروه مقاومت بپیوندد", next: "end1", type: "success" },
      { text: "تلاش برای بازسازی دنیا را شروع کن", next: "end2", type: "success" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  node31_4: {
    text: "وهرام تجهیزات را برای استفاده بعدی ذخیره کرد و تصمیم گرفت که از سایت خارج شود تا بتواند به بازماندگان کمک کند.",
    choices: [
      { text: "به گروه مقاومت بپیوندد", next: "end1", type: "success" },
      { text: "تلاش برای بازسازی دنیا را شروع کن", next: "end2", type: "success" }
    ],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  
  // پایان‌های مختلف
  end1: {
    text: "وهرام با موفقیت پایگاه اصلی خود را گسترش می‌دهد و با استفاده از فناوری انرژی پایدار، به بازسازی زیرساخت‌های جهان کمک می‌کند...",
    choices: [],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  end2: {
    text: "وهرام تصمیم گرفت تمام دانش و تجهیزاتی که به دست آورده بود، برای بازسازی بخشی از جهان استفاده کند...",
    choices: [],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  end3: {
    text: "وهرام با نابود کردن سلاح، مانع از فاجعه‌ای جدید شد. اما در این مسیر، بازماندگان زیادی از دست رفتند.",
    choices: [],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  end4: {
    text: "حمله موفقیت‌آمیز بود و کلاغ‌های سیاه از بین رفتند. بازماندگان حالا فرصتی برای بازسازی داشتند.",
    choices: [],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  end5: {
    text: "وهرام با موفقیت مخزن انرژی را نابود کرد و کلاغ‌های سیاه از بین رفتند. او به مسیر خود ادامه داد و از منطقه دور شد...",
    choices: [],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  end6: {
    text: "وهرام با کلاغ‌های سیاه مذاکره کرد و آن‌ها را متقاعد کرد که انرژی را برای بازسازی دنیا استفاده کنند...",
    choices: [],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  end7: {
    text: "وهرام تصمیم گرفت زندگی انفرادی را در دل کوه‌ها ادامه دهد و روی پروژه‌های علمی خود کار کند...",
    choices: [],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  end8: {
    text: "وهرام موفق شد انرژی مخزن را نابود کند و تیمور را شکست دهد...",
    choices: [],
    image: `${process.env.PUBLIC_URL}/pic/52.webp`,
  },
  
  // سایر پایان‌ها و نودهای اضافی می‌توانند در اینجا اضافه شوند
};

export default storyData;
