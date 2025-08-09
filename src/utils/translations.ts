export interface LiteracyTranslations {
  title: string;
  question: string;
  yesButton: string;
  noButton: string;
  description: string;
  languageName: string;
}

export const literacyTranslations: Record<string, LiteracyTranslations> = {
  english: {
    title: "Language Preference",
    question: "Can you read and write in",
    yesButton: "✅ Yes, I can read and write",
    noButton: "🎤 No, I prefer voice interaction",
    description: "🌱 Don't worry! Grow Smart AI supports both text and voice-based interactions.",
    languageName: "English"
  },
  hindi: {
    title: "भाषा प्राथमिकता",
    question: "क्या आप हिंदी में पढ़ और लिख सकते हैं",
    yesButton: "✅ हाँ, मैं पढ़ और लिख सकता हूँ",
    noButton: "🎤 नहीं, मैं आवाज़ से बात करना पसंद करता हूँ",
    description: "🌱 चिंता न करें! Grow Smart AI टेक्स्ट और आवाज़ दोनों तरीकों का समर्थन करता है।",
    languageName: "हिंदी"
  },
  tamil: {
    title: "மொழி விருப்பம்",
    question: "நீங்கள் தமிழில் படிக்கவும் எழுதவும் முடியுமா",
    yesButton: "✅ ஆம், என்னால் படிக்கவும் எழுதவும் முடியும்",
    noButton: "🎤 இல்லை, நான் குரல் மூலம் பேச விரும்புகிறேன்",
    description: "🌱 கவலைப்பட வேண்டாம்! Grow Smart AI உரை மற்றும் குரல் இரண்டு முறைகளையும் ஆதரிக்கிறது।",
    languageName: "தமிழ்"
  },
  telugu: {
    title: "భాష ప్రాధాన్యత",
    question: "మీరు తెలుగులో చదవగలరా మరియు వ్రాయగలరా",
    yesButton: "✅ అవును, నేను చదవగలను మరియు వ్రాయగలను",
    noButton: "🎤 లేదు, నేను వాయిస్ ద్వారా మాట్లాడటానికి ఇష్టపడతాను",
    description: "🌱 చింతించకండి! Grow Smart AI టెక్స్ట్ మరియు వాయిస్ రెండు పద్ధతులను సపోర్ట్ చేస్తుంది।",
    languageName: "తెలుగు"
  },
  kannada: {
    title: "ಭಾಷಾ ಆದ್ಯತೆ",
    question: "ನೀವು ಕನ್ನಡದಲ್ಲಿ ಓದಬಹುದು ಮತ್ತು ಬರೆಯಬಹುದು",
    yesButton: "✅ ಹೌದು, ನಾನು ಓದಬಹುದು ಮತ್ತು ಬರೆಯಬಹುದು",
    noButton: "🎤 ಇಲ್ಲ, ನಾನು ಧ್ವನಿ ಮಾರ್ಗದಿಂದ ಮಾತನಾಡಲು ಇಷ್ಟಪಡುತ್ತೇನೆ",
    description: "🌱 ಚಿಂತಿಸಬೇಡಿ! Grow Smart AI ಪಠ್ಯ ಮತ್ತು ಧ್ವನಿ ಎರಡೂ ವಿಧಾನಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ।",
    languageName: "ಕನ್ನಡ"
  },
  marathi: {
    title: "भाषा प्राधान्य",
    question: "तुम्ही मराठीत वाचू आणि लिहू शकता का",
    yesButton: "✅ होय, मी वाचू आणि लिहू शकतो",
    noButton: "🎤 नाही, मला आवाजाने बोलणे आवडते",
    description: "🌱 काळजी करू नका! Grow Smart AI मजकूर आणि आवाज दोन्ही पद्धतींना समर्थन देतो।",
    languageName: "मराठी"
  },
  gujarati: {
    title: "ભાષા પસંદગી",
    question: "શું તમે ગુજરાતીમાં વાંચી અને લખી શકો છો",
    yesButton: "✅ હા, હું વાંચી અને લખી શકું છું",
    noButton: "🎤 ના, હું અવાજ દ્વારા વાત કરવાનું પસંદ કરું છું",
    description: "🌱 ચિંતા કરશો નહીં! Grow Smart AI ટેક્સ્ટ અને વૉઇસ બંને પદ્ધતિઓને સપોર્ટ કરે છે।",
    languageName: "ગુજરાતી"
  },
  bengali: {
    title: "ভাষা পছন্দ",
    question: "আপনি কি বাংলায় পড়তে এবং লিখতে পারেন",
    yesButton: "✅ হ্যাঁ, আমি পড়তে এবং লিখতে পারি",
    noButton: "🎤 না, আমি কণ্ঠস্বরের মাধ্যমে কথা বলতে পছন্দ করি",
    description: "🌱 চিন্তা করবেন না! Grow Smart AI টেক্সট এবং ভয়েস উভয় পদ্ধতি সমর্থন করে।",
    languageName: "বাংলা"
  },
  punjabi: {
    title: "ਭਾਸ਼ਾ ਪਸੰਦ",
    question: "ਕੀ ਤੁਸੀਂ ਪੰਜਾਬੀ ਵਿੱਚ ਪੜ੍ਹ ਅਤੇ ਲਿਖ ਸਕਦੇ ਹੋ",
    yesButton: "✅ ਹਾਂ, ਮੈਂ ਪੜ੍ਹ ਅਤੇ ਲਿਖ ਸਕਦਾ ਹਾਂ",
    noButton: "🎤 ਨਹੀਂ, ਮੈਂ ਆਵਾਜ਼ ਰਾਹੀਂ ਗੱਲ ਕਰਨਾ ਪਸੰਦ ਕਰਦਾ ਹਾਂ",
    description: "🌱 ਚਿੰਤਾ ਨਾ ਕਰੋ! Grow Smart AI ਟੈਕਸਟ ਅਤੇ ਆਵਾਜ਼ ਦੋਵਾਂ ਤਰੀਕਿਆਂ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ।",
    languageName: "ਪੰਜਾਬੀ"
  },
  malayalam: {
    title: "ഭാഷാ മുൻഗണന",
    question: "നിങ്ങൾക്ക് മലയാളത്തിൽ വായിക്കാനും എഴുതാനും കഴിയുമോ",
    yesButton: "✅ അതെ, എനിക്ക് വായിക്കാനും എഴുതാനും കഴിയും",
    noButton: "🎤 ഇല്ല, ഞാൻ ശബ്ദത്തിലൂടെ സംസാരിക്കാൻ ഇഷ്ടപ്പെടുന്നു",
    description: "🌱 വേവലാതിപ്പെടേണ്ട! Grow Smart AI ടെക്സ്റ്റും വോയ്സും രണ്ട് രീതികളെയും പിന്തുണയ്ക്കുന്നു।",
    languageName: "മലയാളം"
  },
  spanish: {
    title: "Preferencia de Idioma",
    question: "¿Puedes leer y escribir en español",
    yesButton: "✅ Sí, puedo leer y escribir",
    noButton: "🎤 No, prefiero la interacción por voz",
    description: "🌱 ¡No te preocupes! Grow Smart AI admite interacciones tanto de texto como de voz.",
    languageName: "Español"
  },
  portuguese: {
    title: "Preferência de Idioma",
    question: "Você pode ler e escrever em português",
    yesButton: "✅ Sim, eu posso ler e escrever",
    noButton: "🎤 Não, eu prefiro interação por voz",
    description: "🌱 Não se preocupe! O Grow Smart AI suporta interações por texto e voz.",
    languageName: "Português"
  },
  japanese: {
    title: "言語設定",
    question: "日本語で読み書きできますか",
    yesButton: "✅ はい、読み書きできます",
    noButton: "🎤 いいえ、音声での対話を希望します",
    description: "🌱 ご心配なく！Grow Smart AIはテキストと音声の両方の対話をサポートしています。",
    languageName: "日本語"
  },
  indonesian: {
    title: "Preferensi Bahasa",
    question: "Apakah Anda bisa membaca dan menulis dalam Bahasa Indonesia",
    yesButton: "✅ Ya, saya bisa membaca dan menulis",
    noButton: "🎤 Tidak, saya lebih suka interaksi suara",
    description: "🌱 Jangan khawatir! Grow Smart AI mendukung interaksi teks dan suara.",
    languageName: "Bahasa Indonesia"
  }
};

export const getTranslation = (language: string): LiteracyTranslations => {
  return literacyTranslations[language] || literacyTranslations.english;
};