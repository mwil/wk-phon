var KTypeEnum = Object.freeze(
    {
        no_clue:         0,
        hieroglyph:      1, // 象形: type of character representing pictures
        indicative:      2, // 指事: indicative (kanji whose shape is based on logical representation of an abstract idea)
        comp_indicative: 3, // 会意: kanji made up of meaningful parts (e.g. "mountain pass" is up + down + mountain)
        comp_phonetic:   4, // 形声: kanji in which one element suggests the meaning, the other the pronunciation
        derivative:      5, // 転注: applying an extended meaning to a kanji
        rebus:           6  // 仮借: borrowing a kanji with the same pronunciation to convey an unrelated term
    }
);

var kanji_db = [
    /* List of all joyo kanji here ... */

    /* G1 */
    {
        kanji: "一", readings: ["いち", "いつ"],
        type: KTypeEnum.indicative,
    },
    {
        kanji: "九", readings: ["きゅう", "く"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "七", readings: ["しち", "しつ"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "二", readings: ["ニ", "ジ"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "人", readings: ["ジン", "ニン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "入", readings: ["ニュウ", "ジュ", "ジュウ"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "八", readings: ["ハチ", "ハツ"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "力", readings: ["リョク", "リキ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "十", readings: ["ジュウ", "ジッ"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "下", readings: ["か", "げ"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "三", readings: ["サン"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "千", readings: ["せん"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "上", readings: ["ジョウ", "ショウ"],
        type: KTypeEnum.indicative
    },
    {
        kanji: "口", readings: ["コウ", "ク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "土", readings: ["ト", "ド"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "夕", readings: ["セキ", "シャク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "大", readings: ["ダイ", "タイ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "女", readings: ["ジョ", "ニョ", "ニョウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "子", readings: ["シ", "ス"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "小", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "山", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "川", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "五", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "天", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "中", readings: ["チュウ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "六", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "円", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "手", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "文", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "日", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "月", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "木", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "水", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "火", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "犬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "王", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "正", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "出", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "本", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "右", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "四", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "左", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "玉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "生", readings: ["セイ", "ショウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "田", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "白", readings: ["ハク", "ビャク"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "目", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "石", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "立", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "百", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "年", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "休", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "先", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "名", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "字", readings: ["ジ"],
        phonetic: "子", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "早", readings: ["ソウ", "サッ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "気", readings: ["き", "け"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "竹", readings: ["チク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "糸", readings: ["し"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "耳", readings: ["じ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "虫", readings: ["チュウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "村", readings: ["ソン"],
        phonetic: "寸", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "男", readings: ["ダン", "ナン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "町", readings: ["チョウ", "テイ"],
        phonetic: "丁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "花", readings: ["カ", "ケ"],
        phonetic: "化", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "見", readings: ["ケン", "ゲン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "貝", readings: ["バイ", "マイ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "赤", readings: ["セキ", "シャク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "足", readings: ["ソク", "ショク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "車", readings: ["シャ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "学", readings: ["ガク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "林", readings: ["リン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "空", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "金", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "雨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "青", readings: ["セイ", "ショウ"],
        phonetic: "生", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "草", readings: ["そう"],
        phonetic: "早", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "音", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "校", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "森", readings: [],
        type: KTypeEnum.comp_indicative
    },

    /* G2 */

    {
        kanji: "刀", readings: [],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "万", readings: ["まん", "ばん"],
        type: KTypeEnum.derivative
    },
    {
        kanji: "丸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "才", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "工", readings: ["コウ", "ク"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "弓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "内", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "午", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "少", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "元", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "今", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "公", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "分", readings: ["フン","ブン","ブ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "切", readings: ["セツ","セイ","サイ"],
        phonetic: "七", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "友", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "太", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "引", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "心", readings: ["シン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "戸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "方", readings: ["ホウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "止", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "毛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "父", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "牛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "半", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "市", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "北", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "古", readings: ["コ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "台", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "兄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "冬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "外", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "広", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "母", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "用", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "矢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "交", readings: ["コウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "会", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "合", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "同", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "回", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "寺", readings: ["ジ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "地", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "多", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "光", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "当", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "毎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "池", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "米", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "羽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "考", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "肉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "自", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "色", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "行", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "西", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "来", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "何", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "作", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "体", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "弟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "図", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "声", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "売", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "形", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "汽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "社", readings: ["シャ", "ジャ"],
        phonetic: "土", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "角", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "言", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "谷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "走", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "近", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "里", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "麦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "画", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "東", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "京", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "夜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "直", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "国", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "姉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "妹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "岩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "店", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "明", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "歩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "知", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "長", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "門", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "昼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "前", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "南", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "点", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "室", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "後", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "春", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "星", readings: ["セイ", "ショウ"],
        phonetic: "生", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "海", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "活", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "思", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "科", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "秋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "茶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "計", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "風", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "食", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "首", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "夏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "弱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "原", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "家", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "帰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "時", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "紙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "書", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "記", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "通", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "馬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "高", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "強", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "教", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "理", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "細", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "組", readings: ["そ"],
        phonetic: "且", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "船", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "週", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "野", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "雪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "魚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鳥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "黄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "黒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "場", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "晴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "答", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "絵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "買", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "朝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "道", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "番", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "間", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "雲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "園", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "数", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "新", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "楽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "話", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "電", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鳴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "歌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "算", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "語", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "読", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "聞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "線", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "親", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "頭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "曜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "顔", readings: [],
        type: KTypeEnum.no_clue
    },

    /* G3 */

    {
        kanji: "丁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "予", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "化", readings: ["カ", "ケ", "ゲ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "区", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "反", readings: ["ハン","ホン","タン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "央", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "平", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "申", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "世", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "由", readings: ["ユ", "ユウ", "ユイ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "氷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "主", readings: ["シュ", "ス"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "仕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "他", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "代", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "写", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "号", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "去", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "打", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "皮", readings: ["ヒ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "皿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "礼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "両", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "曲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "向", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "州", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "全", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "次", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "安", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "守", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "式", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "死", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "列", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "羊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "有", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "血", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "住", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "助", readings: ["じょ"],
        phonetic: "且", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "医", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "君", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "坂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "局", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "役", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "投", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "対", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "決", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "究", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "豆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "身", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "返", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "表", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "事", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "育", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "使", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "命", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "味", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "幸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "始", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "実", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "定", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "岸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "所", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "放", readings: ["ほう"],
        phonetic: "方", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "昔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "板", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "泳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "注", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "波", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "油", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "受", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "物", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "具", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "委", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "和", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "者", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "取", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "服", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "苦", readings: ["く"],
        phonetic: "古", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "重", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "乗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "係", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "品", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "客", readings: ["キャク", "カク"],
        phonetic: "各", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "県", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "屋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "炭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "度", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "待", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "急", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "指", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "持", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "昭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "相", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "柱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "洋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "畑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "界", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "発", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "研", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "神", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "秒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "級", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "美", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "負", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "送", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "追", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "面", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "島", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "勉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "倍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "真", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "員", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "庫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "庭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "旅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "根", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "酒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "消", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "流", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "病", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "息", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "荷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "起", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "速", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "配", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "院", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "悪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "商", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "動", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "帳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "族", readings: ["ゾク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "深", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "球", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "祭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "第", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "笛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "終", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "習", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "転", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "進", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "都", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "部", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "問", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "章", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "寒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "暑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "植", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "温", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "湖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "港", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "湯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "登", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "短", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "童", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "等", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "筆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "着", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "期", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "勝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "葉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "落", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "軽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "運", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "開", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "階", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "陽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "集", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "悲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "飲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "歯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "業", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "感", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "想", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "暗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "漢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "福", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "詩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "路", readings: ["ろ"],
        phonetic: "各", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "農", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鉄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "意", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "様", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "緑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "練", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "銀", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "駅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鼻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "横", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "箱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "談", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "調", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "橋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "整", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "薬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "館", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "題", readings: [],
        type: KTypeEnum.no_clue
    },

    /* G4 */

    {
        kanji: "士", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "不", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "夫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "欠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "氏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "民", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "史", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "必", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "失", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "包", readings: ["ホウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "末", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "未", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "以", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "付", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "令", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "加", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "司", readings: ["し", "す"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "功", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "札", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "辺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "印", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "争", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "仲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "伝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "共", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "兆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "各", readings: ["カク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "好", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "成", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "灯", readings: ["とう"],
        phonetic: "丁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "老", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "衣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "求", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "束", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "兵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "位", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "低", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "児", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "冷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "別", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "努", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "労", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "告", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "囲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "完", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "改", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "希", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "折", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "材", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "利", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "臣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "良", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "芸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "初", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "果", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "刷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "卒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "念", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "例", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "典", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "周", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "協", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "参", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "固", readings: ["こ"],
        phonetic: "古", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "官", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "底", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "府", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "径", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "松", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "毒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "泣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "治", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "法", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "牧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "的", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "季", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "英", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "芽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "単", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "省", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "変", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "信", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "便", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "軍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "勇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "型", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "建", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "昨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "栄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "浅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "胃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "祝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "紀", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "約", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "要", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "飛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "候", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "借", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "倉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "孫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "案", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "害", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "帯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "席", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "徒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "挙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "梅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "残", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "殺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "浴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "特", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "笑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "粉", readings: [],
        phonetic: "分", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "料", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "差", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "脈", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "航", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "訓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "連", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "郡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "巣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "健", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "側", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "停", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "副", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "唱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "堂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "康", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "得", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "救", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "械", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "清", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "望", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "産", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "菜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "票", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "貨", readings: ["カ"],
        phonetic: "化", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "敗", readings: ["ハイ", "バイ"],
        phonetic: "貝", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "陸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "博", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "喜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "順", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "街", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "散", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "景", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "最", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "量", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "満", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "焼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "然", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "無", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "給", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "結", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "覚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "象", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "貯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "費", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "達", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "隊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "飯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "働", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "塩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "戦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "極", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "照", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "愛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "節", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "続", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "置", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "腸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "辞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "試", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "歴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "察", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "旗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "漁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "種", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "管", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "説", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "関", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "静", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "億", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "器", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "賞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "標", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "熱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "養", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "課", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "輪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "選", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "機", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "積", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "録", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "観", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "類", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "験", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "願", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鏡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "競", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "議", readings: [],
        type: KTypeEnum.no_clue
    },

    /* G5 */

    {
        kanji: "久", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "仏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "支", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "比", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "可", readings: ["カ", "コク"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "旧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "永", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "句", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "圧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "弁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "布", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "刊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "犯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "示", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "再", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "仮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "件", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "任", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "因", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "団", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "在", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "舌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "似", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "余", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "判", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "均", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "志", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "条", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "災", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "応", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "序", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "快", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "技", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "状", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "防", readings: ["ぼう"],
        phonetic: "方", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "武", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "承", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "価", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "舎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "券", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "制", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "効", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "妻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "居", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "往", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "性", readings: ["セイ", "ショウ"],
        phonetic: "生", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "招", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "易", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "枝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "河", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "版", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "肥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "述", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "非", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "保", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "厚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "故", readings: ["こ"],
        phonetic: "古", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "政", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "査", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "独", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "祖", readings: ["そ"],
        phonetic: "且", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "則", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "逆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "退", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "迷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "限", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "師", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "個", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "修", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "俵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "益", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "能", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "容", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "恩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "格", readings: ["カク", "コウ", "キャク"],
        phonetic: "各", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "桜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "留", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "破", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "素", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "耕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "財", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "造", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "率", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "貧", readings: [],
        phonetic: "分", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "基", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "婦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "寄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "常", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "張", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "術", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "情", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "採", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "授", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "接", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "断", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "液", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "混", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "現", readings: ["ゲン"],
        phonetic: "見", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "略", readings: ["リャク"],
        phonetic: "各", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "眼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "務", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "移", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "経", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "規", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "許", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "設", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "責", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "険", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "備", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "営", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "報", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "富", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "属", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "復", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "提", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "検", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "減", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "測", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "税", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "程", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "絶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "統", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "証", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "評", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "賀", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "貸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "貿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "過", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "勢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "幹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "準", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "損", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "禁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "罪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "義", readings: ["ギ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "群", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "墓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "夢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "解", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "豊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "資", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鉱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "預", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "飼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "像", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "境", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "増", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "徳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "慣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "態", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "構", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "演", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "精", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "総", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "綿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "製", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "複", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "適", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "酸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "銭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "銅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "際", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "雑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "領", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "導", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "敵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "暴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "潔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "確", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "編", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "賛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "質", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "興", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "衛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "燃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "築", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "輸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "績", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "講", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "謝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "織", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "職", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "額", readings: ["ガク"],
        phonetic: "各", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "識", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "護", readings: [],
        type: KTypeEnum.no_clue
    },

    /* G6 */

    {
        kanji: "亡", readings: ["ボウ", "モウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "寸", readings: ["ソン", "スン"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "己", readings: ["こ", "き"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "干", readings: ["カン"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "仁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "尺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "片", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "冊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "収", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "処", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "幼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "庁", readings: ["チョウ", "テイ"],
        phonetic: "丁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "穴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "危", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "后", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "灰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "吸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "存", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "机", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "至", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "否", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "我", readings: ["ガ"],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "系", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "卵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "忘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "孝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "困", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "批", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "私", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "乱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "垂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "乳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "供", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "並", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "刻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "呼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "届", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "延", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "忠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "担", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "枚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "沿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "若", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "看", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "城", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "奏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "姿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "専", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "巻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "律", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "映", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "染", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "段", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "洗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "派", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "皇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "泉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "砂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "紅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "背", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "肺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "革", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蚕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "値", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "俳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "党", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "展", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "座", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "従", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "株", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "将", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "班", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "秘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "純", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "納", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "胸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "朗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "討", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "射", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "針", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "降", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "除", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "陛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "骨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "域", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "密", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "捨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "推", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "探", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "済", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "異", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "盛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "視", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "窓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "翌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "脳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "著", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "訪", readings: ["ホウ"],
        phonetic: "方", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "訳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "欲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "郷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "郵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "閉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "頂", readings: ["チョウ", "テイ"],
        phonetic: "丁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "就", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "善", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "尊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "割", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "創", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "勤", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "裁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "揮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "敬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "晩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "棒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "痛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "筋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "策", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "衆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "装", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "補", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "詞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "貴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "裏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "傷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "暖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "源", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "聖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "盟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "絹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "署", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "腹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蒸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "幕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "誠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "賃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "疑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "層", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "模", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "穀", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "磁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "暮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "誤", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "誌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "認", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "閣", readings: ["カク"],
        phonetic: "各", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "障", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "劇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "権", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "潮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "熟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蔵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "諸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "誕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "論", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "奮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "憲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "操", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "樹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "激", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "糖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "縦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鋼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "厳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "優", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "縮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "覧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "簡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "臨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "難", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "臓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "警", readings: [],
        type: KTypeEnum.no_clue
    },

    /* G9 */

    {
        kanji: "乙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "了", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "又", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "与", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "及", readings: ["キュウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "丈", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "刃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "凡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "勺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "互", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "弔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "井", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "升", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "丹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "乏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "匁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "屯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "介", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "冗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "凶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "刈", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "匹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "厄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "双", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "孔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "幻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "斗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "斤", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "且", readings: ["ショ", "ソ", "ショウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "丙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "甲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "凸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "丘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "斥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "仙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "凹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "召", readings: ["ショウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "巨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "占", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "囚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "奴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "尼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "巧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "払", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "汁", readings: ["ジュウ"],
        phonetic: "十", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "玄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "甘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "矛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "込", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "弐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "朱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "吏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "劣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "充", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "妄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "企", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "仰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "伐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "伏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "刑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "旬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "旨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "匠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "叫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "吐", readings: ["と"],
        phonetic: "土", phonetic_id: -1,
        type: KTypeEnum.no_clue
    },
    {
        kanji: "吉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "如", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "妃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "尽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "帆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "忙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "扱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "朽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "朴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "汚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "汗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "江", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "壮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "缶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "肌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "舟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "芋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "芝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "巡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "迅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "亜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "更", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "寿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "励", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "含", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "佐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "伺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "伸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "但", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "伯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "伴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "呉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "克", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "却", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "吟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "吹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "呈", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "壱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "坑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "坊", readings: ["ぼう"],
        phonetic: "方", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "妊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "妨", readings: ["ぼう"],
        phonetic: "方", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "妙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "肖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "尿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "尾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "岐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "攻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "忌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "床", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "廷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "忍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "戒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "戻", readings: ["れい"],
        phonetic: "大", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "抗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "抄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "択", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "把", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "抜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "扶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "抑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "杉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "沖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "沢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "沈", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "没", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "妥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "狂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "秀", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "肝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "即", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "芳", readings: ["ほう"],
        phonetic: "方", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "辛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "迎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "邦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "岳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "奉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "享", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "盲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "依", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "佳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "侍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "侮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "併", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "免", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "刺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "劾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "卓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "叔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "坪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "奇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "奔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "姓", readings: ["セイ", "ショウ"],
        phonetic: "生", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "宜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "尚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "屈", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "岬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "弦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "征", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "彼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "怪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "怖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "肩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "房", readings: ["ボウ"],
        phonetic: "方", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "押", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "抽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "抵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "披", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "抱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "抹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "昆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "昇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "枢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "析", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "杯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "枠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "欧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "肯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "殴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "況", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "沼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "泥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "泊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "泌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "沸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "泡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "炎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "炊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "炉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "邪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "祈", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "祉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "突", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "肢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "肪", readings: ["ぼう"],
        phonetic: "方", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "到", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "茎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "苗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "茂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "迭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "迫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "邸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "阻", readings: ["そ"],
        phonetic: "且", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "附", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "斉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "甚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "帥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "衷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "幽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "為", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "盾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "卑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "哀", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "亭", readings: ["テイ", "チン"],
        phonetic: "丁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "帝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "侯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "俊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "侵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "促", readings: ["ソク", "ショク"],
        phonetic: "足", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "俗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "盆", readings: [],
        phonetic: "分", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "冠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "削", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "勅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "貞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "卸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "厘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "怠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "叙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "咲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "垣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "契", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "姻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "孤", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "封", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "峡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "峠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "弧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "悔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "恒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "恨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "怒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "威", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "括", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "挟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "挑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "施", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "是", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "冒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "架", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "枯", readings: ["こ"],
        phonetic: "古", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "柄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "柳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "皆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "洪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "浄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "津", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "洞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "牲", readings: ["セイ"],
        phonetic: "生", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "狭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "狩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "珍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "某", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "疫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "柔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "砕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "窃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "糾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "耐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "胎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "胆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "胞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "臭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "荒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "荘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "虐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "訂", readings: ["テイ", "チョウ"],
        phonetic: "丁", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "赴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "軌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "逃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "郊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "郎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "香", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "剛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "衰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "畝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "恋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "倹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "倒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "倣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "俸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "倫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "翁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "兼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "准", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "凍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "剣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "剖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "脅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "匿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "栽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "索", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "桑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "唆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "哲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "埋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "娯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "娠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "姫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "娘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "峰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "貢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "唐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "徐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "悦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "恐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "恭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "恵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "悟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "悩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "扇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "振", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "捜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "挿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "捕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "敏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "核", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "桟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "栓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "桃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "殊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "殉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "浦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "浸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "泰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "浜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "浮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "涙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "浪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "烈", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "畜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "珠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "畔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "疾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "症", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "疲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "眠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "砲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "祥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "称", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "租", readings: ["そ"],
        phonetic: "且", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "秩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "粋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "紛", readings: [],
        phonetic: "分", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "紡", readings: ["ボウ"],
        phonetic: "方", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "紋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "耗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "恥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "脂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "朕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "胴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "致", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "般", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "既", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "華", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蚊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "被", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "託", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "軒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "辱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "唇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "逝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "逐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "逓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "途", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "透", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "酌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "陥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "陣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "隻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "飢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鬼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "剤", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "竜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "粛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "尉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "彫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "偽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "偶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "偵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "偏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "剰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "勘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "乾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "喝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "啓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "唯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "執", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "培", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "堀", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "婚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "婆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "寂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "崎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "崇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "崩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "庶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "庸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "彩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "患", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "惨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "惜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "悼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "悠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "掛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "掘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "掲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "控", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "据", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "措", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "掃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "排", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "描", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "斜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "旋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "曹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "殻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "貫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "涯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "渇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "渓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "渋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "淑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "渉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "淡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "添", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "涼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "猫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "猛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "猟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "瓶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "累", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "盗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "眺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "窒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "符", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "粗", readings: ["そ"],
        phonetic: "且", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "粘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "粒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "紺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "紹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "紳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "脚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "脱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "豚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "舶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "菓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "菊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "菌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "虚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蛍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蛇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "袋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "訟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "販", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "赦", readings: ["シャ"],
        phonetic: "赤", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "軟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "逸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "逮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "郭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "酔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "釈", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "釣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "陰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "陳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "陶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "陪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "隆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "陵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "麻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "斎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "喪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "奥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蛮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "偉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "傘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "傍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "普", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "喚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "喫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "圏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "堪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "堅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "堕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "塚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "堤", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "塔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "塀", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "媒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "婿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "掌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "項", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "幅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "帽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "幾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "廃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "廊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "弾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "尋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "御", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "循", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "慌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "惰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "愉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "惑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "雇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "扉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "握", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "援", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "換", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "搭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "揚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "揺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "敢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "暁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "晶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "替", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "棺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "棋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "棚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "棟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "款", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "欺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "殖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "渦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "滋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "湿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "渡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "湾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "煮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "猶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "琴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "畳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "塁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "疎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "痘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "痢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "硬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "硝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "硫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "筒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "粧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "絞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "紫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "絡", readings: ["らく"],
        phonetic: "各", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "脹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "腕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "葬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "募", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "裕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "裂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "詠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "詐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "詔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "診", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "訴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "越", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "超", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "距", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "軸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "酢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鈍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "閑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "隅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "随", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "焦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "雄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "雰", readings: [],
        phonetic: "分", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "殿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "棄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "傾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "傑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "債", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "催", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "僧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "慈", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "勧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "載", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "嗣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "嘆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "塊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "塑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "塗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "奨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "嫁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "嫌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "寛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "寝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "廉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "微", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "慨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "愚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "愁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "慎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "携", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "搾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "摂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "搬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "暇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "楼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "歳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "滑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "溝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "滞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "滝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "漠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "滅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "溶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "煙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "煩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "雅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "猿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "献", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "痴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "睡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "督", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "碁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "禍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "禅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "稚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "継", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "腰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "艇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蓄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "虞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "虜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "褐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "裸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "触", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "該", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "詰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "誇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "詳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "誉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "賊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "賄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "跡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "践", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "跳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "較", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "違", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "酬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "酪", readings: ["らく"],
        phonetic: "各", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "鉛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鉢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鈴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "隔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "雷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "零", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "靴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "頑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "頒", readings: [],
        phonetic: "分", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "飾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "飽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鼓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "豪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "僕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "僚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "暦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "塾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "奪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "嫡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "寡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "寧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "腐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "彰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "徴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "憎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "慢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "摘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "概", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "雌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "漆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "漸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "漬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "滴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "漂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "漫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "漏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "獄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "碑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "稲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "端", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "箇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "維", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "綱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "緒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "網", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "罰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "膜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "慕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "誓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "誘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "踊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "酵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "酷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "銃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "銑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "銘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "閥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "隠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "需", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "駆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "駄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "髪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "魂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "錬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "緯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "韻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "影", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鋭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "謁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "閲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "縁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "憶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "穏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "稼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "餓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "壊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "懐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "嚇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "獲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "穫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "潟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "轄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "憾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "歓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "環", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "監", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "緩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "艦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "還", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鑑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "輝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "騎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "儀", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "戯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "擬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "犠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "窮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "矯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "響", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "驚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "凝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "緊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "襟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "謹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "繰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "勲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "薫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "慶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "憩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鶏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鯨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "撃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "懸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "謙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "賢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "顕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "顧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "稿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "衡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "購", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "墾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "懇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鎖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "錯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "撮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "擦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "暫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "諮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "賜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "璽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "爵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "趣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "儒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "襲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "醜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "獣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "瞬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "潤", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "償", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "礁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "衝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鐘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "壌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "嬢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "譲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "醸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "錠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "嘱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "審", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "薪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "震", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "錘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "髄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "澄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "瀬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "請", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "籍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "潜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "繊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "薦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鮮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "繕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "礎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "槽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "燥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "藻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "霜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "騒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "贈", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "濯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "濁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "諾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鍛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "壇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鋳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "駐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "懲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "聴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鎮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "墜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "締", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "徹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "撤", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "謄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "踏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "騰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "闘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "篤", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "曇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "縄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "濃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "覇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "輩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "賠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "薄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "爆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "縛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "繁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "藩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "範", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "盤", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "罷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "避", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "賓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "頻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "敷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "膚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "譜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "賦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "舞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "覆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "噴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "墳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "憤", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "幣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "弊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "壁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "癖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "舗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "穂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "簿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "縫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "褒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "膨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "謀", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "墨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "撲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "翻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "摩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "磨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "魔", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "繭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "魅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "霧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "黙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "躍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "癒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "諭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "憂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "融", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "慰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "窯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "謡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "翼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "羅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "頼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "欄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "濫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "履", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "離", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "慮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "寮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "療", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "糧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "隣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "隷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "霊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "麗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "齢", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "擁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "露", readings: [],
        type: KTypeEnum.no_clue
    },

    /* Kanji added to Joyo in 2008 */

    {
        kanji: "藤", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "誰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "俺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "岡", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "頃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "奈", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "阪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "韓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "弥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "那", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鹿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "斬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "虎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "狙", readings: ["ソ", "ショ"],
        phonetic: "且", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "脇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "熊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "尻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "旦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "闇", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "籠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "呂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "亀", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "頬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "膝", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鶴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "匂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "沙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "須", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "椅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "股", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "眉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "挨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鎌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "凄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "謎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "稽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "曾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "喉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "貌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "塞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蹴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鍵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "膳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "袖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "潰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "駒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "剥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鍋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "湧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "葛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "梨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "貼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "拉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "枕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "顎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "苛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蓋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "裾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "腫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "爪", readings: ["ソウ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "嵐", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "鬱", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "妖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "藍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "捉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "宛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "崖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "叱", readings: ["しつ", "しち"],
        phonetic: "七", phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
    {
        kanji: "瓦", readings: ["ガ"],
        type: KTypeEnum.hieroglyph
    },
    {
        kanji: "拳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "乞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "呪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "汰", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "勃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "昧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "唾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "艶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "痕", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "諦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "餅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "瞳", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "唄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "隙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "淫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "錦", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "箸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "戚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蒙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "妬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蔑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "嗅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蜜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "戴", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "痩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "怨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "醒", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "詣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "窟", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "巾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蜂", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "骸", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "弄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "嫉", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "罵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "璧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "阜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "埼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "伎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "曖", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "餌", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "爽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "詮", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "芯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "綻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "肘", readings: ["チュウ"],
        type: KTypeEnum.comp_indicative
    },
    {
        kanji: "麓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "憧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "頓", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "牙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "咽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "嘲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "臆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "挫", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "溺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "侶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "丼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "瘍", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "僅", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "諜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "柵", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "腎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "梗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "瑠", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "羨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "酎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "畿", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "畏", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "瞭", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "踪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "栃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "蔽", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "茨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "慄", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "傲", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "虹", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "捻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "臼", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "喩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "萎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "腺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "桁", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "玩", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "冶", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "羞", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "惧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "舷", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "貪", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "采", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "堆", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "煎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "斑", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "冥", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "遜", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "旺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "麺", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "璃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "串", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "填", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "箋", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "脊", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "緻", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "辣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "摯", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "汎", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "憚", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "哨", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "氾", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "諧", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "媛", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "彙", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "恣", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "聘", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "沃", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "憬", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "捗", readings: [],
        type: KTypeEnum.no_clue
    },
    {
        kanji: "訃", readings: [],
        type: KTypeEnum.no_clue
    },


    /* Template No Clue */
    {
        kanji: "", readings: [],
        type: KTypeEnum.no_clue
    },
    /* Template Indicative */
    {
        kanji: "", readings: [],
        type: KTypeEnum.indicative
    },
    /* Template Phonetic */
    {
        kanji: "", readings: [],
        phonetic: null, phonetic_id: -1,
        type: KTypeEnum.comp_phonetic
    },
];

var phon_db = [
    /* List of all phonetic components here ... */
    {
        phonetic: "七", readings: ["しち", "しつ"],
        compounds: ["叱","切"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["七"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "十", readings: ["ジュウ", "ジッ"],
        compounds: ["汁"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["十"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "土", readings: ["ト", "ド"],
        compounds: ["吐", "社"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["土"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "大", readings: ["ダイ", "タイ"],
        compounds: ["戻"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["大"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "子", readings: ["シ", "ス"],
        compounds: ["字"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["子"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "早", readings: ["そう"],
        compounds: ["草"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["早"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "寸", readings: ["ソン", "スン"],
        compounds: ["村"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["寸"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "丁", readings: ["チョウ", "テイ", "トウ"],
        compounds: ["庁", "灯", "町", "亭", "頂", "訂"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["丁"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "化", readings: ["カ", "ケ", "ゲ"],
        compounds: ["花", "貨"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["化"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "見", readings: ["ケン", "ゲン"],
        compounds: ["現"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["見"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "貝", readings: ["バイ", "マイ"],
        compounds: ["敗"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["貝"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "赤", readings: ["セキ", "シャク"],
        compounds: ["赦"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["赤"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "足", readings: ["ソク", "ショク"],
        compounds: ["促"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["足"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "方", readings: ["ホウ"],
        compounds: ["坊", "妨", "芳", "防", "放", "肪", "房", "紡", "訪"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["方"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "古", readings: ["コ"],
        compounds: ["苦", "固", "故", "枯"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["古"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "生", readings: ["セイ", "ショウ"],
        compounds: ["姓", "性", "牲", "星", "青"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["生"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "青", readings: ["セイ", "ショウ"],
        compounds: ["情", "清", "精", "請", "晴"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["青", "生"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "且", readings: ["ショ", "ソ", "ショウ"],
        compounds: ["助", "狙", "阻", "祖", "租", "組", "粗"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["且"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "各", readings: ["かく"],
        compounds: ["客", "格", "略", "絡", "路", "酪", "閣", "額"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["各"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "主", readings: ["シュ", "ス"],
        compounds: ["住", "注", "柱", "駐"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["主"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "几", readings: ["キ"],
        compounds: ["机", "肌", "飢"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "亡", readings: ["ボウ", "モウ"],
        compounds: ["妄", "忘", "盲", "忙", "望"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["亡"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "干", readings: ["カン"],
        compounds: ["刊", "汗", "肝", "岸", "幹"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["干"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "己", readings: ["こ", "き"],
        compounds: ["妃", "忌", "紀", "記", "配", "改"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["己"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "工", readings: ["コウ", "ク"],
        compounds: ["功", "江", "紅", "虹", "空", "貢", "攻"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["工"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "及", readings: ["キュウ"],
        compounds: ["吸", "扱", "急", "級"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["及"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "中", readings: ["チュウ"],
        compounds: ["仲", "沖", "忠", "衷"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["中"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "反", readings: ["ハン","ホン","タン"],
        compounds: ["坂", "阪", "返", "板", "版", "販", "飯"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["反"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "白", readings: ["ハク", "ビャク"],
        compounds: ["伯", "泊", "拍", "迫", "舶"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["白"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "皮", readings: ["ヒ"],
        compounds: ["披", "彼", "波", "破", "疲", "被"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["皮"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "包", readings: ["ホウ"],
        compounds: ["砲", "飽", "抱", "泡", "胞"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["包"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "可", readings: ["カ", "コク"],
        compounds: ["何", "河", "苛"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["可"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "司", readings: ["し", "す"],
        compounds: ["伺", "詞", "飼", "嗣"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["司"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "召", readings: ["ショウ"],
        compounds: ["招", "沼", "昭", "紹", "詔", "超"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["召"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "寺", readings: ["ジ"],
        compounds: ["侍", "待", "持", "時", "特", "詩"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["寺"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "圭", readings: ["ケイ"],
        compounds: ["崖", "街", "掛"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "交", readings: ["コウ"],
        compounds: ["郊", "校", "絞", "較"], compound_ids: [],
        non_compounds: ["効"], non_compound_ids: [],
        xrefs: ["交"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "我", readings: ["ガ"],
        compounds: ["餓"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["我"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "義", readings: ["ギ"],
        compounds: ["儀", "犠", "議"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["義"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "兪", readings: ["ユ"],
        compounds: ["愉", "喩", "癒", "諭", "輸"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "由", readings: ["ユ", "ユウ", "ユイ"],
        compounds: ["油", "宙", "笛", "軸"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["由"], xref_ids: [],
        quality: -1.0
    },
    {
        // TODO: go comp
        phonetic: "莫", readings: ["バク", "マク", "ボ", "モ"],
        compounds: ["募", "墓", "幕", "漠", "慕", "模", "膜", "暮"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },

    {
        phonetic: "分", readings: ["フン", "ブン", "ブ"],
        compounds: ["盆", "貧", "粉", "紛", "雰", "頒"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["分"], xref_ids: [],
        quality: -1.0
    },
    {
        phonetic: "少", readings: ["しょう"],
        compounds: ["秒"], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: ["少"], xref_ids: [],
        quality: -1.0
    },

    /* Template */
    {
        phonetic: "", readings: [""],
        compounds: [""], compound_ids: [],
        non_compounds: [], non_compound_ids: [],
        xrefs: [], xref_ids: [],
        quality: -1.0
    },
];

/*
 * Notes stack
 *
 * 静荷歌
 */
