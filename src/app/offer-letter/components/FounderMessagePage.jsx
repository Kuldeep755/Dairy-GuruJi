import React from "react";

export default function FounderMessagePage() {
  return (
    <div className="pdf-page w-[210mm] min-h-[297mm] print:w-full print:min-h-0 mx-auto print:mx-0 bg-white p-[20mm] shadow-lg print:shadow-none print:p-[15mm] relative bg-cover bg-center overflow-hidden shrink-0 print:block">
      <div className="flex items-center justify-between border-b-2 border-green-600 pb-6 mb-8 mt-4">
        <img
          src="/logo-dairy-guruji.svg"
          alt="Dairy Guruji Logo"
          className="h-20 object-contain"
        />
        <div className="text-right">
          <h1 className="text-2xl font-black text-green-700 tracking-wider">
            DAIRY GURUJI
          </h1>
          <p className="text-sm text-gray-600 font-bold uppercase tracking-widest">
            (Managed by Bijendera Group)
          </p>
        </div>
      </div>

      <div className="flex gap-8 mb-8">
        <div className="w-1/3 flex-shrink-0">
          <div className="rounded-2xl overflow-hidden border-4 border-green-100 shadow-md">
            <img
              src="/images/about/founder.jpg"
              alt="Himanshu - Founder"
              className="w-full h-auto object-cover aspect-[4/5]"
              data-print-optimize="image"
              loading="eager"
              decoding="sync"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-sm font-bold text-gray-900">
              Himanshu Choudhary
            </h3>
            <p className="text-sm font-bold text-green-600 uppercase tracking-wide">
              Founder, Dairy Guruji
            </p>
            <div className="mt-2 text-sm text-gray-600 font-medium ">
              <p>Director & Chief Consultant Dairy Guru Ji</p>
              <p>Nutrition | Breeding | Farm Management</p>
            </div>
          </div>
        </div>

        <div className="w-2/3 space-y-4 text-[13px] leading-relaxed text-gray-800 text-justify flex flex-col justify-between">
          <div>
            <p className="text-lg font-bold text-green-700 mb-4 leading-snug">
              मैं ऑस्ट्रेलिया से आपका भाई हिमांशु, जिसे भारतीय किसान व
              पशुपालकों द्वारा Dairy Guruji के नाम से जाना जाता है
            </p>
            <p className="mb-3">
              मेरे भारत देश के प्यारे पशुपालक भाइयों मैं हिमांशु, मेरा जन्म
              हरियाणा, भारत में हुआ और फॉर्मल ऑस्ट्रेलिया में रहती है।
              Hansraj College (Delhi University) से मैंने ग्रेजुएशन की उसके
              बाद उच्चतम शिक्षा के लिए ऑस्ट्रेलिया गया। जहां University of
              Western Australia में कुछ समय पढ़ाई की। इसके अतिरिक्त करीब तीन
              साल तक थनैला रोग, रुकान में विशेषज्ञता भारत ऑस्ट्रेलिया की
              सबसे बड़ी संस्थानों में से एक Dairy Australia के डेयरी
              फार्मिंग में CERT 3 प्राप्त किया। वर्ष 2024 में मैंने animal
              feeding and nutrition का गहन अध्ययन समाप्त किया और animal feed
              formulation पर भी गहरा अध्ययन किया।
            </p>
            <p className="mb-3">
              डेयरी इंडस्ट्री में मेरे काम व रुचि को देखते हुए सिर्फ भारत ही
              नहीं ऑस्ट्रेलिया में भी काफी बड़े बड़े डॉक्टरों, सीनियर
              एक्सपर्ट्स और ऑस्ट्रेलिया की अनेक संस्थानों ने भी प्रशंसा की।
            </p>
            <p>
              ऑस्ट्रेलिया से भारत में लगभग वर्ष में 2 बार दौरे पर आता हूं और
              छोटे से छोटे पशुपालकों से मिलता हूं। उनकी जमीनी स्तर पर जानने
              की कोशिश करता हूं कि उनकी क्या समस्या है, उसी के आधार पर भारत
              में मेरे साथी पशु चिकित्सक व ऑस्ट्रेलिया में पशु चिकित्सकों के
              योगदान से मेरे खुद के अनुभव के आधार पर यह अद्भुत प्रोडक्ट
              बनाया है पशुओं की जिन्दगी, जिसके रिजल्ट बहुत ही शानदार और कम
              समय में पशुओं में देखने को मिलेगी।
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-xl border border-green-200 mt-auto mb-8 shadow-sm">
        <h4 className="font-bold text-green-800 mb-3 text-lg flex items-center gap-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          मेरा लक्ष्य मेरे भारत देश में डेयरी फार्मिंग को सफल बनाना
        </h4>
        <ul className="list-disc pl-5 space-y-3 text-green-900 font-medium text-sm">
          <li>भारत में दूसरी श्वेत क्रांति लाना।</li>
          <li>
            ज्यादा से ज्यादा संख्या में पशु पालक परिवार से संबंधित युवा भाई
            बहनों को डेयरी गुरुजी कंपनी के माध्यम से रोजगार देना।
          </li>
          <li>
            सबसे सस्ते डेयरी गुरुजी प्रोडक्ट के माध्यम से भारत देश में पशुओं
            में हर प्रकार की समस्या जैसे:
            <span className="block mt-2 text-gray-700 font-normal bg-white p-3 rounded border border-green-100 shadow-sm leading-relaxed">
              <strong>
                हीट रिपीट • थनैला रोग • उर रुकना • फूल दिखाना • कम दूध
                उत्पादन • गर्म बुखार • कंपन व SNF • milk fever • सूख का
                पीड़ा • शरीर पर कीड़े इत्यादि
              </strong>
            </span>
          </li>
        </ul>
      </div>

      <div className="text-center font-bold text-lg text-green-800 border-t-2 border-green-200 pt-6 mt-auto">
        Dairy Guruji के product पशुओं की सभी समस्याओं और पोषक तत्वों की कमी
        का कम लागत व कम समय में समाधान करेंगे।
      </div>
    </div>
  );
}
