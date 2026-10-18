import { Locale } from "@/translations";

export interface ValuePrinciple {
  title: string;
  description: string;
}

export interface AboutContent {
  maisonTitle: string;
  storyTitle: string;
  storyLead: string;
  storyParagraph1: string;
  storyParagraph2: string;
  valuesTitle: string;
  valuesText: string;
  principles: ValuePrinciple[];
}

export const ABOUT_DATA: Record<Locale, AboutContent> = {
  EN: {
    maisonTitle: "THE MAISON",
    storyTitle: "OUR STORY",
    storyLead:
      "KUMAR was born from a belief that a garment should feel as though it belongs to the person wearing it.",
    storyParagraph1:
      "We bring the character of selvedge denim together with the enduring presence of full-grain leather, shaped by considered design and the skill of the Indian masterji. Each piece begins with the material, but finds its meaning in the hands that make it and in the individual who makes it their own.",
    storyParagraph2:
      "Our ambition is to create modern heirlooms: pieces made to be worn, repaired, and lived in, gathering character with every year.",
    valuesTitle: "OUR VALUES",
    valuesText:
      "KUMAR values the meeting of exceptional materials, considered design, and Indian craftsmanship. We honour the artisans behind each piece, create for a more personal fit, and make garments intended to be worn, cared for, and lived in over time.",
    principles: [
      {
        title: "CRAFT, HELD IN HIGH REGARD",
        description:
          "We honour the knowledge, precision, and experience of the people who make and fit each piece.",
      },
      {
        title: "MATERIAL WITH CHARACTER",
        description:
          "We choose denim and leather for their substance, tactility, and ability to grow more individual with time.",
      },
      {
        title: "A MORE PERSONAL FIT",
        description:
          "We believe luxury should meet the person. Our approach brings considered sizing together with skilled fitting and thoughtful adjustment.",
      },
      {
        title: "DESIGNED TO ENDURE",
        description:
          "We favour lasting silhouettes, considered details, and care that helps each piece remain in use.",
      },
      {
        title: "RECOGNITION THROUGH CRAFT",
        description:
          "We seek to create meaningful, skilled work for artisans and to recognise the value of their expertise.",
      },
    ],
  },
  FR: {
    maisonTitle: "LA MAISON",
    storyTitle: "NOTRE HISTOIRE",
    storyLead:
      "KUMAR est née de la conviction qu'un vêtement doit faire corps avec la personne qui le porte.",
    storyParagraph1:
      "Nous réunissons le caractère du denim selvedge et la présence intemporelle du cuir pleine fleur, façonnés par un design réfléchi et le savoir-faire du masterji indien. Chaque création commence par la matière, mais trouve tout son sens dans les mains qui la confectionnent et chez celui qui la fait sienne.",
    storyParagraph2:
      "Notre ambition est de créer des pièces d'héritage moderne : des créations faites pour être portées, réparées et vécues, gagnant en caractère au fil des années.",
    valuesTitle: "NOS VALEURS",
    valuesText:
      "KUMAR célèbre la rencontre de matières d'exception, d'un design rigoureux et de l'artisanat indien. Nous honorons les artisans derrière chaque pièce, concevons pour un tombé sur mesure et créons des vêtements destinés à être portés, entretenus et transmis dans le temps.",
    principles: [
      {
        title: "L'ARTISANAT, HAUTEMENT ESTIMÉ",
        description:
          "Nous honorons le savoir-faire, la précision et l'expérience des artisans qui façonnent et ajustent chaque pièce.",
      },
      {
        title: "UNE MATIÈRE DE CARACTÈRE",
        description:
          "Nous choisissons le denim et le cuir pour leur substance, leur toucher et leur capacité à s'individualiser avec le temps.",
      },
      {
        title: "UNE COUPE PLUS PERSONNELLE",
        description:
          "Nous croyons que le luxe doit épouser la personne. Notre approche associe un taillant étudié à un ajustement sur mesure et attentif.",
      },
      {
        title: "CONÇU POUR DURER",
        description:
          "Nous privilégions des silhouettes intemporelles, des détails pensés et un soin qui permet à chaque vêtement de traverser les âges.",
      },
      {
        title: "LA RECONNAISSANCE PAR LE SAVOIR-FAIRE",
        description:
          "Nous nous engageons à offrir un travail noble et valorisant aux artisans, en célébrant l'inestimable valeur de leur expertise.",
      },
    ],
  },
  JA: {
    maisonTitle: "メゾン",
    storyTitle: "私たちの物語",
    storyLead:
      "KUMARは、衣服とは身に纏う人自身に属していると感じられるべきであるという信念から誕生しました。",
    storyParagraph1:
      "セルビッジデニムの持つ力強い個性とフルグレインレザーの不朽の存在感を結びつけ、思慮深いデザインとインド人マスタージ（仕立て職人）の卓越した技によって形づくられます。すべての作品は素材から始まり、それを作る職人の手、そしてそれを自らのものとする個人の手の中で真の意味を見出します。",
    storyParagraph2:
      "私たちの願いは、着込まれ、修繕され、共に生きることで年月とともに深みを増していく「現代の家宝」を創造することです。",
    valuesTitle: "私たちの価値観",
    valuesText:
      "KUMARは、比類なき至高の素材、思慮深いデザイン、そしてインド伝統の卓越した職人技の出逢いを重んじています。私たちは一着一着に込められた職人たちを敬い、よりパーソナルなフィットを追求し、長い時を経て愛され、手入れされ、共に生き続ける衣服を仕立てています。",
    principles: [
      {
        title: "至高の敬意を払う職人技",
        description:
          "私たちは、一着一着を仕立て、身体に合わせる職人たちの知識、精密さ、そして長年の経験に最大の敬意を捧げます。",
      },
      {
        title: "個性を宿す素材",
        description:
          "時を経るほどに持ち主だけの個性を深めていくその質感、触感、そして本質的な強靭さゆえに、私たちはデニムとレザーを選び抜いています。",
      },
      {
        title: "よりパーソナルなフィット",
        description:
          "ラグジュアリーとは着る人に寄り添うものであるべきです。熟慮されたサイジングと熟練のフィッティング、細やかな微調整によってそれを実現します。",
      },
      {
        title: "時代を越えて受け継がれる設計",
        description:
          "永く愛される端正なシルエット、細部まで計算された仕立て、そして一着が永く愛用され続けるための手入れを大切にしています。",
      },
      {
        title: "クラフツマンシップを通じた誇り",
        description:
          "私たちは職人たちに意義ある高度な仕事を生み出し、その卓越した技術の価値を正当に讃えることを目指しています。",
      },
    ],
  },
  AR: {
    maisonTitle: "الدار الفاخرة",
    storyTitle: "قصتنا",
    storyLead:
      "وُلدت دار KUMAR من إيمان عميق بأن الرداء يجب أن يبدو وكأنه جزء أصيل من شخصية من يرتديه.",
    storyParagraph1:
      "نحن نجمع بين الطابع الفريد لدنيم السيلفدج العريق والوقار الدائم للجلد الطبيعي الكامل، مجسدين ذلك بتصميم مدروس ومهارة استثنائية من الماسترجي الهندي. تبدأ كل قطعة من نقاء الخامة، لكنها تجد معناها الأسمى في الأيدي التي تصنعها وفي الشخص الذي يجعلها عنواناً لأناقته الخاصة.",
    storyParagraph2:
      "طموحنا هو ابتكار مقتنيات تتوارثها الأجيال: قطع صُممت لتُرتدى وتُرمم وتُعاش، لتكتسب رونقاً وشخصية أعمق مع كل عام يمر.",
    valuesTitle: "قيمنا",
    valuesText:
      "تُقدّر دار KUMAR اللقاء الاستثنائي بين أنقى الخامات والتصميم المدروس والحرفية الهندية الرفيعة. نحن نكرم الحرفيين وراء كل قطعة، ونبتكر قصات أكثر ملاءمة وخصوصية لكل فرد، ونصنع أزياء خُلقت لتُرتدى وتُصان وتُعاش على مدى الزمن.",
    principles: [
      {
        title: "الحرفية في أسمى درجات التقدير",
        description:
          "نحن نجلّ المعرفة والدقة والخبرة العميقة للأشخاص الذين يصنعون ويضبطون مقاس كل قطعة.",
      },
      {
        title: "خامات ذات طابع أصيل",
        description:
          "نختار الدنيم والجلد لجوهرها وملمسها وقدرتها الفريدة على اكتساب هوية خاصة بمرور الزمن.",
      },
      {
        title: "مقاس أكثر خصوصية وتفرداً",
        description:
          "نؤمن بأن الفخامة الحقيقية يجب أن تليق بصاحبها. يجمع نهجنا بين المقاسات المدروسة والحياكة الماهرة والتعديل الدقيق.",
      },
      {
        title: "صُممت لتدوم عبر الأجيال",
        description:
          "نفضل القصات الخالدة، والتفاصيل المتقنة، والعناية الفائقة التي تضمن بقاء كل قطعة حية في الاستخدام.",
      },
      {
        title: "الاعتراف والتقدير عبر الحرفية",
        description:
          "نسعى لخلق فرص عمل هادفة وراقية للحرفيين، والاعتراف الصادق بالقيمة الرفيعة لخبراتهم.",
      },
    ],
  },
};
