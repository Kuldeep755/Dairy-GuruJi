const baseProducts = [
  {
    id: "mld",
    name: "MLD – Milk Let Down Suspension",
    image: "/images/products/mld.png",
    description:
      "Stress, noise, routine changes, or nervousness often cause incomplete milk let-down. MLD is a hormone-free suspension that ensures natural milk let-down, improves milk yield, and removes the need for oxytocin injections.",
    benefits: [
      "Supports natural milk let-down",
      "Increases milk yield",
      "Reduces stress and nervousness",
      "Improves udder gland health",
      "Safe alternative to oxytocin injections",
    ],
    benefitsHindiTitle: "फायदे :-",
    benefitsHindi: [
      "दूध को उतारने में मदद करता है।",
      "दूध का उत्पादन बढ़ाता है।",
      "दूध ग्रंथियों के स्वास्थ्य ऊतकों का विकास करता है।",
      "तंत्रिका टॉनिक के रूप में कार्य करता है।",
      "चिड़चिड़ापन एवं तनाव को रोकता है।",
      "ऑक्सिटोसिन इंजेक्शन लगाने की जरूरत नहीं पड़ती, सेफ प्रोडक्ट है।",
    ],
    feedingInstructions: {
      large: "50–100 मि.ली. सस्पेंशन दिन में दो बार दूध दुहने से एक घंटे पहले।",
    },
    packaging: "सस्पेंशन : 1 लीटर की बोतल में",
    tag: "Hormone-Free",
    problem: "Incomplete or delayed milk let-down",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    farmerStory: {
      quote: "पहले दूध निकलने में 15 मिनट लगते थे, अब सिर्फ 8 मिनट में पूरा दूध निकल जाता है। गायें भी शांत रहती हैं।",
      name: "राजेश कुमार",
      location: "दूध फार्म, उत्तर प्रदेश",
      result: "दूध निकलने का समय 47% कम हुआ, दूध की मात्रा में 18% वृद्धि"
    }
  },

  {
    id: "mineral-mixture",
    name: "Mineral Mixture",
    image: "/images/products/mineral.png",
    description:
      "Mineral deficiency leads to infertility, repeat breeding, weak immunity, and low milk fat/SNF. Dairy Guru Ji Mineral Mixture provides balanced macro and trace minerals for complete reproductive and metabolic support.",
    benefits: [
      "Improves fertility and heat cycle",
      "Reduces repeat breeding",
      "Boosts immunity",
      "Improves milk fat and SNF",
      "Enhances digestion",
    ],
    benefitsHindiTitle: "मिनरल मिक्सचर के फायदे :-",
    benefitsHindi: [
      "पशु का बार-बार रिपीट होने की समस्या का जड़ से इलाज।",
      "कीटोसिस जैसी मेटाबोलिक बीमारी का इलाज।",
      "बीमारियों से लड़ने की शक्ति प्रदान करता है।",
      "बछड़े, बछड़ी का तीव्र विकास करता है।",
      "दूध छुड़वाने के समय तनाव को कम करता है।",
      "दूध के उत्पादन में वृद्धि करता है, फैट व SNF को बढ़ाता है।",
      "पशु का डाइजेशन सही करता है।",
      "इससे आपका पशु समय पर गर्मी में आयेगा।",
    ],
    nutritionalValue: [
      { label: "CALCIUM", value: "26%" },
      { label: "PHOSPHORUS", value: "13%" },
      { label: "COBALT", value: "150 (MG)" },
      { label: "COPPER", value: "1200(MG)" },
      { label: "IODINE", value: "325(MG)" },
      { label: "IRON", value: "1500 (MG)" },
      { label: "MAGNESIUM", value: "6000 (MG)" },
      { label: "MANGANESE", value: "1500 (MG)" },
      { label: "ZINC", value: "9600 (MG)" },
      { label: "DL-METHIONINE", value: "1920 (MG)" },
      { label: "SULPHUR", value: "0.72%" },
    ],
    feedingInstructions: {
      large: "100 ग्राम रोजाना",
      small: "50 ग्राम रोजाना",
    },
    packaging: "पॉउडर 1 किग्रा व 5 किग्रा में उपलब्ध",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    dosage: "Adult: 100 g/day | Young: 50 g/day",
    pack: "1 kg & 5 kg",
    tag: "Daily Nutrition",
    problem: "Mineral deficiency and fertility issues",
    farmerStory: {
      quote: "6 महीने तक गायें गर्भवती नहीं हो रही थीं। खनिज मिश्रण शुरू करने के 2 महीने बाद सभी गायें गर्भवती हो गईं।",
      name: "सुरेश पांडे",
      location: "दूध उत्पादक, मध्य प्रदेश",
      result: "प्रजनन दर 92% बढ़ी, दूध में वसा 15% बढ़ी"
    }
  },

  {
    id: "calf-supplement",
    name: "Calf Supplement",
    image: "/images/products/calf-supplement.png",
    description:
      "A fortified supplement designed for calves to support early growth, immunity, bone strength, and overall development using essential minerals, vitamins, bypass fat, and herbal extracts.",
    benefits: [
      "Improves immunity and growth",
      "Strengthens bones and muscles",
      "Enhances digestion",
      "Supports early development",
      "Boosts overall health",
    ],
    benefitsHindiTitle: "निम्नलिखित परिस्थितियों में डेयरी गुरुजी काफ सप्लीमेंट का इस्तेमाल करें।",
    benefitsHindi: [
      "बछड़ों के समग्र स्वास्थ्य के लिए लाभकारी !",
      "शारीरिक विकास और प्रतिरक्षा प्रणाली को मजबूत बनाता है।",
      "यह आवश्यक खनिजों और विटामिनों की आपूर्ति करता है।",
      "जिससे हड्डियां मजबूत होती हैं और बीमारी से बचाव होता है, जो स्वास्थ्य और तेजी से वृद्धि के लिए महत्वपूर्ण है।",
      "बछिया/कटड़ी के जनन अंगों के जल्दी विकास के लिए।",
      "सांड झोटे से जल्दी सर्विस लेने के लिए।",
    ],
    composition: [
      { label: "Each 1 kg provides", value: "" },
      { label: "Dicalcium Phosphate", value: "300 gm" },
      { label: "Zinc Amino Acid Chelate", value: "8 gm" },
      { label: "Manganese Amino Acid Chelate", value: "3.50 gm" },
      { label: "Copper Amino Acid Chelate", value: "0.5 gm" },
      { label: "Vitamin A", value: "10,00,000 I.U." },
      { label: "Vitamin D3", value: "2,00,000 I.U." },
      { label: "Vitamin E", value: "800 I.U." },
      { label: "Fermented Yeast Culture", value: "60 gm" },
      { label: "Curcuma longa", value: "25 gm" },
      { label: "Bypass Fat", value: "100 gm" },
      { label: "Base", value: "q.s." },
    ],
    feedingInstructions: {
      items: [
        { label: "बछिया / सांड", value: "40 ग्राम रोजाना" },
        { label: "कटड़ी / झोटा", value: "40 ग्राम रोजाना" },
      ]
    },
    packaging: "पॉउडर 1 किग्रा में उपलब्ध",
    dosage: "Calf/Bull: 40 g daily",
    pack: "1 kg",
    tag: "Growth Support",
    problem: "Weak growth and low immunity in calves",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    farmerStory: {
      quote: "मेरे बछड़े पहले बीमार रहते थे और धीरे बढ़ते थे। अब 4 महीने में ही पहले साल भर का वजन बढ़ गया है।",
      name: "अनिल यादव",
      location: "पशुपालक, बिहार",
      result: "बछड़ों का वजन 60% तेजी से बढ़ा, बीमारियां 80% कम हुईं"
    }
  },

  {
    id: "dairy-guruji-h",
    name: "Dairy Guru Ji H",
    image: "/images/products/dairy-guruji-h.png",
    description:
      "A powerful herbal suspension that reduces mastitis risk, improves udder health, lowers somatic cell count, and enhances feed conversion ratio (FCR).",
    benefits: [
      "Reduces mastitis and udder inflammation",
      "Improves milk quality",
      "Lowers somatic cell count",
      "Enhances feed conversion ratio",
      "Improves udder tissue recovery",
    ],
    benefitsHindiTitle: "डेयरी गुरुजी एच. के फायदे :-",
    benefitsHindi: [
      "थन की सूजन को कम करने में मदद करता है।",
      "खुरों की विकृतियों से बचाव करता है।",
      "दूध में सोमेटिक सेल काउंट को कम करता है।",
      "वजन बढ़ाने और फीड कन्वर्जन रेशियो (FCR) को बेहतर बनाता है।",
      "थन नलिका की एपिथीलियम की पुनः वृद्धि को प्रोत्साहित करता है।",
      "स्तनशोथ (मैस्टाइटिस) और अन्य थनों की बीमारियों से बचाव करता है।",
      "थन को खराब होने से बचाता है।",
      "अडर का विकास करता है।",
    ],
    composition: [
      { label: "Each 1 ml Contains", value: "" },
      { label: "Vitamin A", value: "22000 IU" },
      { label: "Vitamin D3", value: "10000 IU" },
      { label: "Vitamin H (Biotin)", value: "500 mcg" },
      { label: "Vitamin B12", value: "20 mcg" },
      { label: "Vitamin E", value: "30 mg" },
      { label: "Selenium", value: "10 mcg" },
      { label: "Zinc", value: "40mg" },
    ],
    feedingInstructions: {
      items: [
        { label: "बड़े पशु : (गाय, भैस और घोड़े)", value: "10-20 मि.ली. रोजाना" },
        { label: "छोटे पशु : (कटड़ी, बछड़ी, बकरी और भेड़)", value: "5 मि.ली. रोजाना" },
        { label: "मुर्गी पालन", value: "5-10 मि.ली. प्रत्येक 100 पक्षी रोजाना" },
      ]
    },
    packaging: "सस्पेंशन : 500 मि.ली. की बोतल में",
    dosage: "Large animals: 10–20 ml/day | Small animals: 5 ml/day",
    pack: "500 ml Bottle",
    tag: "Udder Health",
    problem: "Mastitis and udder infections",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    farmerStory: {
      quote: "मस्तितिस की समस्या से छुटकारा पाया। दूध की गुणवत्ता बेहतर हुई और दूध का रंग भी सफेद हो गया।",
      name: "महेश शर्मा",
      location: "डेयरी फार्म, राजस्थान",
      result: "मस्तितिस के मामले 95% कम हुए, दूध SNF 12% बढ़ा"
    }
  },

  {
    id: "bypass-fat",
    name: "Bypass Fat",
    image: "/images/products/bypass-fat.png",
    description:
      "Rumen-protected bypass fat improves energy levels, prevents milk fever and ketosis, and significantly increases milk yield and fat percentage.",
    benefits: [
      "Prevents ketosis and milk fever",
      "Improves milk fat percentage",
      "Increases milk yield",
      "Provides high energy",
      "Supports post-calving recovery",
    ],
    benefitsHindiTitle: "बाईपास फैट के फायदे :-",
    benefitsHindi: [
      "कीटोसिस से बचाता हैं।",
      "दूध से फैट कि रिकवरी के लिए।",
      "मिल्क फीवर से बचाता है।",
      "दूध बढ़ाने में मदद करता है।",
      "नव ब्याने के बाद पशु बिल्कुल भी दूध न दे, या जब पिछले ब्यात से कम दूध दे तब आप बाईपास फैट का प्रयोग करें।",
    ],
    composition: [
      { label: "Each 100 gm Provides", value: "" },
      { label: "Rumen bypass fat", value: "15 g" },
      { label: "Rumen bypass protein", value: "1 g" },
      { label: "Calcium propionate", value: "2 g" },
      { label: "Fermented Yeast culture", value: "5 g" },
      { label: "Available Calcium", value: "1.5 g" },
    ],
    feedingInstructions: {
      items: [
        { label: "बड़े पशु", value: "100 gm रोजाना 15 दिन तक पशु के ब्याने से पहले" },
        { label: "", value: "100 gm दिन में 2 बार 7 दिन तक ब्याने के तुरंत बाद" },
        { label: "छोटे पशु", value: "50 gm रोजाना 15 दिन तक पशु के ब्याने से पहले" },
        { label: "", value: "50 gm दिन में 2 बार 7 दिन तक ब्याने के तुरंत बाद" },
      ]
    },
    packaging: "सस्पेंशन : 10 किग्रा. की बाल्टी में",
    dosage: "Large animals: 100 g/day | Small animals: 50 g/day",
    pack: "10 kg Bucket",
    tag: "High Energy",
    problem: "Low milk fat and energy deficiency",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    farmerStory: {
      quote: "प्रसव के बाद गायें कमजोर हो जाती थीं। बायपास फैट ने ऊर्जा दी, दूध में वसा 22% बढ़ी और लाभ में 30% वृद्धि हुई।",
      name: "विजय सिंह",
      location: "दूध उत्पादक, हरियाणा",
      result: "दूध वसा 22% बढ़ी, प्रसव के बाद स्वस्थ्य 95% सुधरा"
    }
  },

  {
    id: "dairy-guruji-gel",
    name: "Dairy Guru Ji Gel",
    image: "/images/products/dairy-guruji-gel.png",
    description:
      "An advanced calcium-rich gel formulated to prevent milk fever, restore calcium levels after calving, and provide instant energy to animals.",
    benefits: [
      "Prevents milk fever",
      "Restores calcium balance",
      "Boosts energy instantly",
      "Improves milk yield and fat",
      "Supports post-calving recovery",
    ],
    benefitsHindiTitle: "डेयरी गुरुजी Gel के फायदे :-",
    benefitsHindi: [
      "बच्चा देने के समय कैल्शियम की कमी को पूरा करता है, जब गाय या भैंस बच्चा देती है, तब उसके शरीर में कैल्शियम की मात्रा तेजी से कम हो जाती है। Dairy Guruji Gel उस समय शरीर में कैल्शियम की कमी को तुरंत पूरा करता है।",
      "मिल्क फीवर (Milk Fever) से बचाव करता है, दूध देने के शुरुआती समय में कई बार गाय या भैंस को Milk Fever हो जाता है। यह Gel उस बीमारी से बचाव में मदद करता है।",
      "पशु को ताकत और एनर्जी देता है, यह Gel देने से पाचन ठीक रहता है, थकान दूर होती है और पशु फिर से एक्टिव महसूस करता है।",
      "दूध की मात्रा और फैट बढ़ाने में मददगार जब शरीर में कैल्शियम संतुलित रहता है तो पशु का दूध उत्पादन बढ़ता है और फैट लेवल भी सुधरता है।",
      "सुरक्षित और असरदार फॉर्मूला, यह Gel पूरी तरह हर्बल और रासायनिक रूप से सुरक्षित होता है, जिससे किसी तरह का नुकसान नहीं होता।",
      "यात्रा या थकान की स्थिति में बेहद उपयोगी, अगर आपका पशु किसी कारणवश गाड़ी से लाया गया हो या लंबे सफर के बाद थका हुआ महसूस कर रहा हो, या दूध की मात्रा कम हो गई हो, तो ऐसी स्थिति में Dairy Guruji Gel आपके पशु के लिए रामबाण इलाज साबित होता है। यह तुरंत एनर्जी देता है और दूध उत्पादन को सामान्य करता है",
    ],
    composition: [
      { label: "Each 100 ml Contains", value: "" },
      { label: "Calcium", value: "10000 mg" },
      { label: "Phosphorus", value: "5000 mg" },
      { label: "Vitamin D", value: "32000 LU" },
      { label: "Pueraria mirifica ext.", value: "200 mg" },
      { label: "Clematis mandshurica", value: "2g" },
      { label: "Trichosanthes kirilowi", value: "2g" },
      { label: "Prunella vulgaris", value: "5g" },
      { label: "Chlorophytum borivilianum", value: "12 g" },
    ],
    feedingInstructions: {
      note: "नियमित उपयोग:- अधिक दूध उत्पादन के लिए, प्रतिदिन प्रत्येक पशु को एक बोतल 5 से 10 दिनों तक दे या पशु चिकित्सक के निर्देशानुसार हो",
    },
    packaging: "सस्पेंशन : 300 मि.ली. की बोतल में",
    dosage: "1 bottle daily for 5–10 days or as advised",
    pack: "300 ml Bottle",
    tag: "Calcium Boost",
    problem: "Milk fever and calcium deficiency",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    farmerStory: {
      quote: "प्रसव के बाद गायें बुखार और कमजोरी से परेशान होती थीं। जेल ने 24 घंटे में ही ऊर्जा वापस लाई।",
      name: "रमेश चंद",
      location: "पशुपालक, उत्तराखंड",
      result: "दूध ज्वर के मामले 100% कम हुए, दूध उत्पादन 18% बढ़ा"
    }
  },

  {
    id: "calcium",
    name: "Calcium Suspension",
    image: "/images/products/calcium.png",
    description:
      "A high-strength calcium suspension enriched with vitamins and herbs to strengthen bones, improve milk production, and prevent milk fever.",
    benefits: [
      "Strengthens bones and teeth",
      "Improves milk yield and fat",
      "Prevents milk fever",
      "Enhances digestion",
      "Boosts animal strength",
    ],
    benefitsHindiTitle: "निम्नलिखित परिस्थितियों में डेयरी गुरुजी कैल्शियम का इस्तेमाल करें।",
    benefitsHindi: [
      "पशुओं की हड्डियों व दांतों को मजबूत बनाता है।",
      "पशुओं का मिल्क फीवर से बचाव करता है।",
      "पशुओं में दूध का उत्पादन एवं दूध में फैट की मात्रा बढ़ाता है।",
      "पाचन में सुधार करता है।",
      "कमजोर वजन न बढ़ने वाले या सुस्त पशुओं के लिए उनकी ताकत व शरीर की चमक को बढ़ाता है।",
    ],
    nutritionalValue: [
      { label: "Calcium", value: "6000 mg" },
      { label: "Phosphorus", value: "3000 mg" },
      { label: "Vitamin A", value: "12000 IU" },
      { label: "Vitamin D3", value: "50,000 IU" },
      { label: "Vitamin E", value: "4,500 IU" },
      { label: "Vitamin B12", value: "400 mcg" },
      { label: "Vitamin H", value: "200 mcg" },
      { label: "Magnesium", value: "400 mg" },
      { label: "Zinc Sulphate", value: "1500 mg" },
      { label: "Selenium", value: "250 mcg" },
      { label: "Cobalt Chloride", value: "100 mg" },
      { label: "Shatawari Ext", value: "1000 mg" },
      { label: "Jiwanti Ext", value: "1000 mg" },
      { label: "Safed Jeera Ext", value: "500 mg" },
      { label: "Safed Musli Ext", value: "500 mg" },
    ],
    feedingInstructions: {
      large: "दूध देने वाले पशु के लिए : 100 मि.ली. प्रति दिन",
    },
    packaging: "सस्पेंशन : 5 लीटर व 20 लीटर के कंटेनर में",
    dosage: "100 ml per day for milking animals",
    pack: "5 L & 20 L",
    tag: "Bone Strength",
    problem: "Calcium deficiency",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    farmerStory: {
      quote: "हड्डियां कमजोर होने से गायें चलने में तकलीफ महसूस करती थीं। कैल्शियम सस्पेंशन ने हड्डियां मजबूत कीं और दूध भी बढ़ा।",
      name: "सतीश कुमार",
      location: "दूध फार्म, झारखंड",
      result: "हड्डियां 85% मजबूत हुईं, दूध उत्पादन 20% बढ़ा"
    }
  },

  {
    id: "liver-tonic",
    name: "Liver Tonic",
    image: "/images/products/liver-tonic.png",
    description:
      "A powerful herbal liver tonic that improves digestion, enhances feed intake, boosts milk fat and SNF, and protects liver health.",
    benefits: [
      "Improves liver function",
      "Boosts appetite",
      "Enhances milk fat & SNF",
      "Improves digestion",
      "Protects from fatty liver",
    ],
    benefitsHindiTitle: "निम्नलिखित परिस्थितियों में डेयरी गुरुजी लीवर टॉनिक का इस्तेमाल करें।",
    benefitsHindi: [
      "फैटी लीवर (चर्बी का जमजाना) के लिए।",
      "हेपोटाइटिस (लीवर में सूजन) के लिए।",
      "दवाइयों के साइड-इफेक्ट्स से लीवर का कमजोर होने से बचाना।",
      "आक्सीडेशन के कारण लीवर का डैमेज होने से रोकना।",
      "भूख को बढ़ाने में मदद करता है।",
      "दूध में फैट और SNF को बढ़ाता है।",
      "लीवर के कार्य को बेहतर बनाता है।",
    ],
    composition: [
      { label: "Each 20 ml contains", value: "" },
      { label: "Ferrous Gluconate", value: "230 mg" },
      { label: "Ferrous Chloride", value: "100 mg" },
      { label: "Thiamine Hydrochloride", value: "5 mg" },
      { label: "Riboflavin", value: "5 mg" },
      { label: "Nicotinic Acid", value: "25 mg" },
      { label: "Nicotinamide", value: "50 mg" },
      { label: "Calcium Lactate", value: "500 mg" },
      { label: "Tricholine Citrate", value: "750 mg" },
      { label: "Yeast Extract", value: "1.2 gm" },
      { label: "Silymarine", value: "150 mg" },
      { label: "Liver Extract", value: "3.25 gm" },
      { label: "Lysine Mono HCI", value: "60 mg" },
      { label: "Fortified with Herbal Extracts", value: "q.s." },
    ],
    feedingInstructions: {
      items: [
        { label: "बड़े पशु", value: "प्रतिदिन 100 मि.ली." },
        { label: "छोटे पशु", value: "प्रतिदिन 50 मि.ली." },
        { label: "चूजे एवं बढ़ते पक्षी", value: "100 पक्षियों पर 10 मि.ली." },
        { label: "अंडे देने वाली मुर्गियाँ", value: "100 पक्षियों पर 20 मि.ली." },
      ],
      note: "पशु चिकित्सक के निर्देशानुसार।",
    },
    packaging: "सस्पेंशन : 500 मि.ली. की बोतल में",
    dosage: "Large animals: 100 ml/day | Small animals: 50 ml/day",
    pack: "500 ml Bottle",
    tag: "Digestive Health",
    problem: "Poor digestion and liver disorders",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    farmerStory: {
      quote: "गायों का पाचन खराब था, खाना खाने के बाद भी कमजोर दिखती थीं। लिवर टॉनिक ने पाचन सुधारा और दूध में वसा बढ़ाई।",
      name: "अरुण पांडे",
      location: "पशुपालक, छत्तीसगढ़",
      result: "पाचन 90% सुधरा, दूध वसा 16% बढ़ी"
    }
  },

  {
    id: "deworming-bolus",
    name: "Deworming Bolus",
    image: "/images/products/deworming.png",
    description:
      "A unique herbal deworming bolus that removes internal parasites, improves digestion, and enhances overall animal health without side effects.",
    benefits: [
      "Eliminates internal worms",
      "Improves digestion",
      "Boosts appetite",
      "Enhances body condition",
      "Safe herbal formulation",
    ],
    benefitsHindiTitle: "डेयरी गुरुजी डिवर्मिंग बोलस के फायदे।",
    benefitsHindi: [
      "पेट और आंतों के सभी कीड़े खत्म करती है।",
      "दूध बढ़ाने में मदद (कीड़े खत्म होने से पोषण सही लगता है)।",
      "भूख बढ़ाती है।",
      "गैस, कब्ज और अपच से राहत दिलाती है।",
      "ढीला गोबर ठीक करती है।",
      "जानवर की बॉडी कंडीशन सुधारती है।",
    ],
    composition: [
      { label: "Composition", value: "" },
      { label: "Ingredients", value: "Pudina, Hard, Saunf, Jeera, Alsi, Senna Leaves, Palash Beej, Macca, Madhumalti, Gulab, Ajwain, Amaltas, Harmal, Neem Leaf, Babul, Chandarsuralndrayan." },
    ],
    feedingInstructions: {
      items: [
        { label: "बड़े पशु", value: "1 बोलस" },
        { label: "छोटे पशु", value: "1/2 बोलस" },
      ],
      note: "सावधानियाँ: 24 घण्टे तक कोई दूसरी दवा न दें। 6 महीने से कम उम्र वाले पशु को न दें। दवा देने के बाद 1-2 घण्टे तक पानी कम दें। बहुत कमजोर, बीमार या तेज बुखार वाले पशु को न दें। गर्भवती पशु को पहले 2-3 महीने और आखिरी के 2 महीने में न दें।",
    },
    packaging: "1 बॉक्स में 10 बोलस",
    dosage: "Large animals: 1 bolus | Small animals: ½ bolus",
    pack: "Box of 10 Bolus",
    tag: "Herbal Dewormer",
    problem: "Worm infestation",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    farmerStory: {
      quote: "बच्चे पहले पतले and कमजोर रहते थे। दीमक की दवा ने कीड़े निकाले, अब बच्चे मोटे-तंदुरुस्त हैं।",
      name: "रामकिशन",
      location: "पशुपालक, उत्तर प्रदेश",
      result: "कीड़े 100% खत्म, बच्चों का वजन 45% बढ़ा"
    }
  },

  {
    id: "feed-6000-plus",
    name: "Cattle Feed 6000+",
    image: "/images/products/feed-6000.png",
    description:
      "Improved formula cattle feed designed for higher milk production, better body condition, and improved fat & SNF.",
    benefits: [
      "Increases milk yield",
      "Improves fat and SNF",
      "Boosts immunity",
      "Enhances digestion",
      "Reduces repeat breeding",
    ],
    benefitsHindiTitle: "डेयरी गुरुजी फीड क्यों अलग है, इसके फायदे :-",
    benefitsHindi: [
      "पशु रिपीट ब्रीडिंग पर वरदान।",
      "हीट समय पर आयेगी व हीट साफ दिखाई देगी।",
      "दूध के उत्पादन में वृद्धि करता हैं।",
      "फैट व S.N.F. को बढ़ाता है।",
      "पशु को स्वस्थ रखता हैं।",
      "पाचन तंत्र को मजबूत करता है।",
      "रोग प्रतिरोधक क्षमता को बढ़ाता है।",
      "खराब दाने / फंगल टॉक्सिन से सुरक्षा देता है।",
    ],
    nutritionalValue: [
      { label: "Value per Kg", value: "" },
      { label: "Crude Protein", value: "20.3%" },
      { label: "Fat", value: "3.2%" },
      { label: "NaHCO3", value: "2000mg" },
      { label: "Calcium (Ca)", value: "7700mg" },
      { label: "Phosphoreus (P)", value: "5140mg" },
      { label: "Magnesium (Mg)", value: "1500mg" },
      { label: "Sulphur (S)", value: "1300mg" },
      { label: "Sodium (Na)", value: "5550mg" },
      { label: "Chloride (Cl)", value: "3700mg" },
      { label: "Choline Chloride", value: "100mg" },
      { label: "L-Lysine Hcl", value: "700mg" },
      { label: "Toxin Binder", value: "1950mg" },
      { label: "Moisture", value: "11.3%" },
      { label: "NPN, if present", value: "1%" },
    ],
    feedingInstructions: {
      items: [
        { label: "रोज का दूध: 5-7 लीटर", value: "रोज की फीड: 2-2.5 किलो" },
        { label: "रोज का दूध: 8-10 लीटर", value: "रोज की फीड: 3-3.5 किलो" },
        { label: "रोज का दूध: 11-13 लीटर", value: "रोज की फीड: 4-4.5 किलो" },
      ],
      note: "हर 2.5 लीटर दूध पर 1 किलो फीड दें।",
    },
    dosage: "1 kg feed per 2.5 litres of milk",
    pack: "Bag",
    tag: "Balanced Feed",
    problem: "Low milk production",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    farmerStory: {
      quote: "पहले 10 लीटर दूध आता था, अब 13 लीटर आता है। गायों का स्वास्थ्य भी बेहतर हुआ है।",
      name: "हरीश चंद",
      location: "दूध उत्पादक, पंजाब",
      result: "दूध उत्पादन 30% बढ़ा, गायों का स्वास्थ्य 80% सुधरा"
    }
  },

  {
    id: "feed-8000-plus",
    name: "Cattle Feed 8000+",
    image: "/images/products/feed-8000.png",
    description:
      "Advanced high-performance cattle feed enriched with vitamins, minerals, and amino acids for maximum milk yield and animal health.",
    benefits: [
      "Maximizes milk production",
      "Improves immunity",
      "Enhances fertility",
      "Supports digestion",
      "Boosts body strength",
    ],
    benefitsHindiTitle: "डेयरी गुरुजी फीड क्यों अलग है, इसके फायदे :-",
    benefitsHindi: [
      "पशु रिपीट ब्रीडिंग पर वरदान।",
      "हीट समय पर आयेगी व हीट साफ दिखाई देगी।",
      "दूध के उत्पादन में वृद्धि करता हैं।",
      "फैट व S.N.F. को बढ़ाता है।",
      "पशु को स्वस्थ रखता हैं।",
      "पाचन तंत्र को मजबूत करता है।",
      "रोग प्रतिरोधक क्षमता को बढ़ाता है।",
      "खराब दाने / फंगल टॉक्सिन से सुरक्षा देता है।",
    ],
    nutritionalValue: [
      { label: "Value per Kg", value: "" },
      { label: "Crude Protein", value: "23%" },
      { label: "Fat", value: "5%" },
      { label: "NaHCO3", value: "8000 mg" },
      { label: "Calcium (Ca)", value: "7700 mg" },
      { label: "Phosphoreus (P)", value: "5140 mg" },
      { label: "Magnesium (Mg)", value: "3540 mg" },
      { label: "Sulphur (S)", value: "2780 mg" },
      { label: "Sodium (Na)", value: "5700 mg" },
      { label: "Chloride (Cl)", value: "3820 mg" },
      { label: "Choline Chloride", value: "750 mg" },
      { label: "L-Lysine Hcl", value: "2000 mg" },
      { label: "DI-Methionine", value: "13.44 mg" },
      { label: "Cobalt (Co)", value: "1.20 mg" },
      { label: "Copper (Cu)", value: "15.79 mg" },
      { label: "Iodine (I)", value: "2.32 mg" },
      { label: "Iron (Fe)", value: "91.95 mg" },
      { label: "Manganese (Mn)", value: "41.75 mg" },
      { label: "Zinc (Zn)", value: "95.96 mg" },
      { label: "Selenium (Se)", value: "0.20 mg" },
      { label: "Vitamin A", value: "15000 IU" },
      { label: "Vitamin D3", value: "3000 IU" },
      { label: "Vitamin E", value: "30 mg" },
      { label: "Vitamin K", value: "2.25 mg" },
      { label: "Thiamine (B1)", value: "2.25 mg" },
      { label: "Riboflavin (B2)", value: "4.50 mg" },
      { label: "Niacin (B3)", value: "30 mg" },
      { label: "Pyridoxine (B6)", value: "2.25 mg" },
      { label: "Pantothenic Acid", value: "12 mg" },
      { label: "Folic Acid", value: "0.75 mg" },
      { label: "Biotin", value: "0.015 mg" },
      { label: "Vitamin B12", value: "0.0075 mg" },
      { label: "Toxin Binder", value: "4000 mg" },
      { label: "Yeast Powder", value: "4000 mg" },
      { label: "Moisture", value: "10.2%" },
    ],
    feedingInstructions: {
      items: [
        { label: "रोज का दूध: 5-7 लीटर", value: "रोज की फीड: 2-2.5 किलो" },
        { label: "रोज का दूध: 8-10 लीटर", value: "रोज की फीड: 3-3.5 किलो" },
        { label: "रोज का दूध: 11-13 लीटर", value: "रोज की फीड: 4-4.5 किलो" },
        { label: "रोज का दूध: 14-16 लीटर", value: "रोज की फीड: 5-5.5 किलो" },
      ],
      note: "हर 2.5 लीटर दूध पर 1 किलो फीड दें।",
    },
    dosage: "1 kg feed per 2.5 litres of milk",
    pack: "Bag",
    tag: "Premium Feed",
    problem: "High nutritional demand",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    farmerStory: {
      quote: "हाई-परफॉरमेंस फीड ने मेरी गायों का दूध 18 लीटर से 24 लीटर तक पहुंचा दिया। लाभ में 40% वृद्धि हुई।",
      name: "सुभाष यादव",
      location: "डेयरी फार्म, गुजरात",
      result: "दूध उत्पादन 33% बढ़ा, लाभ 40% बढ़ा"
    }
  },
];

const defaultDetails = {
  suitableFor: ["Dairy cows and buffaloes", "Farm use under regular feeding plans"],
  keyIngredients: [
    "Balanced mineral and vitamin support",
    "Targeted nutritional actives",
    "Digestive and metabolic support factors",
  ],
  usageTips: [
    "Use daily as per recommended dosage for best consistency.",
    "Mix well with feed or water before offering.",
    "Keep a regular schedule and monitor milk output/animal condition weekly.",
  ],
  expectedTimeline: "Initial visible response is commonly seen within 10-21 days.",
  bestTimeToUse: "Best used daily at a fixed time as advised.",
  storage:
    "Store in a cool and dry place, away from sunlight. Keep pack tightly closed after each use.",
};

const detailByProduct = {
  mld: {
    suitableFor: [
      "Animals showing delayed or incomplete milk let-down",
      "Cows/buffaloes stressed during milking",
    ],
    keyIngredients: [
      "Hormone-free let-down support blend",
      "Herbal calming support",
      "Udder circulation support factors",
    ],
    usageTips: [
      "Offer 1 hour before milking session.",
      "Use consistently during stress, weather, or routine changes.",
      "Maintain calm milking environment for better response.",
    ],
    expectedTimeline:
      "Let-down behavior may improve within 3-7 days of regular use.",
    bestTimeToUse: "Before each milking session, as per dosage.",
  },
  "mineral-mixture": {
    suitableFor: [
      "Lactating animals with low fat/SNF",
      "Animals facing repeat breeding or weak heat signs",
    ],
    keyIngredients: [
      "Macro minerals (Ca, P, Mg)",
      "Trace minerals (Zn, Cu, Mn, Co, I)",
      "Vitamin and metabolic support cofactors",
    ],
    usageTips: [
      "Mix in concentrate feed daily.",
      "Continue for at least one breeding cycle for reproductive support.",
      "Pair with balanced roughage and clean water.",
    ],
    expectedTimeline:
      "Body condition and appetite support may appear in 2-3 weeks; fertility support needs longer regular use.",
    bestTimeToUse: "Daily with main ration.",
  },
  "calf-supplement": {
    suitableFor: [
      "Growing calves with low weight gain",
      "Young stock needing bone and immunity support",
    ],
    keyIngredients: [
      "Calf growth minerals and vitamins",
      "Protein and energy support factors",
      "Herbal gut-health actives",
    ],
    usageTips: [
      "Provide with starter feed at the same time every day.",
      "Maintain clean water and deworming schedule.",
      "Track monthly body-weight growth.",
    ],
    expectedTimeline: "Growth and vigor response is usually visible in 3-4 weeks.",
    bestTimeToUse: "Daily with calf concentrate/starter feed.",
  },
  "dairy-guruji-h": {
    suitableFor: [
      "Animals with udder stress or recurring mastitis tendency",
      "Farms targeting lower somatic cell count",
    ],
    keyIngredients: [
      "Herbal anti-inflammatory support blend",
      "Udder tissue recovery nutrients",
      "Feed conversion support factors",
    ],
    usageTips: [
      "Use continuously in high-risk periods (early lactation/seasonal stress).",
      "Maintain udder hygiene and clean milking practice.",
      "Consult a veterinarian for active infection cases.",
    ],
    expectedTimeline: "Udder comfort and milk quality support may appear in 7-14 days.",
    bestTimeToUse: "Daily after feed, as advised for species/size.",
  },
  "bypass-fat": {
    suitableFor: [
      "High-yield lactating animals with energy deficit",
      "Early lactation and post-calving recovery phase",
    ],
    keyIngredients: [
      "Rumen-protected bypass fat granules",
      "High-density energy matrix",
      "Milk-fat support nutrients",
    ],
    usageTips: [
      "Start near calving and continue through peak lactation.",
      "Mix thoroughly in concentrate to avoid selective feeding.",
      "Balance with protein and minerals for best output.",
    ],
    expectedTimeline:
      "Energy recovery and milk-fat response can appear in 10-20 days.",
    bestTimeToUse: "Daily in lactation ration, especially early lactation.",
  },
  "dairy-guruji-gel": {
    suitableFor: [
      "Freshly calved animals needing rapid calcium support",
      "Animals with milk fever risk",
    ],
    keyIngredients: [
      "Fast-acting calcium sources",
      "Energy support components",
      "Post-calving recovery cofactors",
    ],
    usageTips: [
      "Follow advised schedule for first post-calving days.",
      "Ensure water intake and regular feed intake.",
      "Use with veterinarian guidance in severe clinical cases.",
    ],
    expectedTimeline: "Energy and calcium support is generally rapid, often same day.",
    bestTimeToUse: "Immediately post-calving or during calcium stress.",
  },
  calcium: {
    suitableFor: [
      "Milking animals with calcium demand",
      "Animals needing bone and muscle support",
    ],
    keyIngredients: [
      "Bioavailable calcium sources",
      "Vitamin support blend",
      "Herbal digestive support factors",
    ],
    usageTips: [
      "Use consistently during lactation and high-demand phases.",
      "Shake well before use if suspension settles.",
      "Pair with mineral mixture for complete support.",
    ],
    expectedTimeline: "Strength and production support may be seen in 1-3 weeks.",
    bestTimeToUse: "Daily after feeding.",
  },
  "liver-tonic": {
    suitableFor: [
      "Animals with weak appetite and poor digestion",
      "Milk animals needing better feed utilization",
    ],
    keyIngredients: [
      "Herbal hepatoprotective actives",
      "Digestive support components",
      "Metabolic and appetite support nutrients",
    ],
    usageTips: [
      "Give before or after feed at fixed timing.",
      "Use as a course for digestive stress periods.",
      "Maintain clean fodder and avoid sudden feed shifts.",
    ],
    expectedTimeline: "Appetite and digestion support is often visible in 5-10 days.",
    bestTimeToUse: "Daily during appetite/digestion stress periods.",
  },
  "deworming-bolus": {
    suitableFor: [
      "Animals with suspected internal worm burden",
      "Routine farm parasite-control programs",
    ],
    keyIngredients: [
      "Herbal anti-parasitic plant actives",
      "Gut-supportive botanical factors",
      "Digestive recovery support",
    ],
    usageTips: [
      "Follow farm deworming calendar and body-weight guidance.",
      "Provide clean drinking water and hygienic housing.",
      "Repeat as advised by field expert/veterinarian.",
    ],
    expectedTimeline: "Digestive and appetite response may improve within 7-14 days.",
    bestTimeToUse: "As per deworming schedule, not for unsupervised daily use.",
  },
  "feed-6000-plus": {
    suitableFor: [
      "Medium to high-yield lactating animals",
      "Farms targeting better fat and SNF with stable yield",
    ],
    keyIngredients: [
      "Balanced cereal-protein energy base",
      "Mineral and vitamin premix",
      "Production-support amino acid profile",
    ],
    usageTips: [
      "Split daily quantity across 2-3 feeding times.",
      "Introduce gradually over 3-5 days if changing feed.",
      "Ensure adequate dry fodder and green fodder balance.",
    ],
    expectedTimeline:
      "Milk quantity/quality response is generally seen in 10-21 days with consistent rationing.",
    bestTimeToUse: "Daily, with milking-linked ration schedule.",
  },
  "feed-8000-plus": {
    suitableFor: [
      "High-yield animals with greater nutritional demand",
      "Farms focused on peak milk output and body condition",
    ],
    keyIngredients: [
      "High-performance energy and protein matrix",
      "Essential minerals and vitamins",
      "Amino acid and immunity support nutrients",
    ],
    usageTips: [
      "Feed in divided servings with each major milking cycle.",
      "Transition from regular feed gradually over 4-7 days.",
      "Monitor milk yield, fat/SNF, and body condition weekly.",
    ],
    expectedTimeline:
      "Performance response may start within 7-14 days, with stronger results over continuous use.",
    bestTimeToUse: "Daily during peak lactation and high-demand stages.",
  },
};

export const products = baseProducts.map((product) => ({
  ...defaultDetails,
  ...product,
  ...(detailByProduct[product.id] ?? {}),
}));

export const getProductById = (id) =>
  products.find((product) => product.id === id);
