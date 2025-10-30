import { Download, FileText } from 'lucide-react';
import { getSiteSettings } from '@/lib/cms';

export default function CV() {
  const settings = getSiteSettings();
  const cvFile = settings.cvFile || '/cv/Curriculum_Elisa_Antoniello.pdf';

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-primary-900 text-black">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 animate-fade-in">
            Curriculum Vitae
          </h1>
          <p className="text-xl text-black/80 max-w-3xl animate-fade-in animate-delay-100">
            Esperienza professionale, formazione e competenze in allestimento scenico e produzioni teatrali
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 bg-white">
        <div className="container-custom text-center">
          <a
            href={cvFile}
            download="Curriculum_Elisa_Antoniello.pdf"
            className="btn-primary inline-flex items-center gap-3"
          >
            <Download size={24} />
            Scarica CV (PDF)
          </a>
        </div>
      </section>

      {/* CV Preview */}
      <section className="section-padding bg-warm-gray">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* CV Content */}
            <div className="bg-white rounded-xl stage-shadow p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif text-primary-900 mb-2">
                  Elisa Antoniello
                </h2>
                <p className="text-xl text-primary-600">Studentessa</p>
                <p className="text-primary-500 mt-2">
                  +39 388 394 0674 · ellimj9@gmail.com
                </p>
              </div>

              <div className="space-y-12">
                {/* Su di me */}
                <div>
                  <h3 className="text-2xl font-serif text-primary-900 mb-6 pb-2 border-b-2 border-accent">
                    Su di Me
                  </h3>
                  <p className="text-primary-700">
                    Solare e professionale, disponibile e flessibile per gli orari e ritmi di lavoro.
                  </p>
                </div>

                {/* Istruzione e formazione */}
                <div>
                  <h3 className="text-2xl font-serif text-primary-900 mb-6 pb-2 border-b-2 border-accent">
                    Istruzione e Formazione
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-primary-900">
                          Diploma AFAM in Tecniche di allestimento scenico
                        </h4>
                        <span className="text-primary-600">2024 - 2027</span>
                      </div>
                      <p className="text-primary-700 font-medium">
                        Accademia Teatro alla Scala, Milano
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-primary-900">
                          Primo anno corso Teatro, Cinema e Media
                        </h4>
                        <span className="text-primary-600">2023 - 2024</span>
                      </div>
                      <p className="text-primary-700 font-medium">
                        Università La Sapienza, Roma
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-primary-900">
                          Diploma coreutico
                        </h4>
                        <span className="text-primary-600">2018 - 2023</span>
                      </div>
                      <p className="text-primary-700 font-medium">
                        Liceo Matilde di Canossa, Reggio Emilia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Esperienza professionale */}
                <div>
                  <h3 className="text-2xl font-serif text-primary-900 mb-6 pb-2 border-b-2 border-accent">
                    Esperienza Professionale
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-primary-900">
                          Staff Concorso CND - Organizzazione e gestione
                        </h4>
                        <span className="text-primary-600">2025</span>
                      </div>
                      <p className="text-primary-700 font-medium mb-2">
                        Teatro Asioli, Correggio (RE)
                      </p>
                      <p className="text-primary-600">
                        Ho gestito l'organizzazione dei candidati al concorso CND presso il teatro Asioli di Correggio (RE)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Competenze */}
                <div>
                  <h3 className="text-2xl font-serif text-primary-900 mb-6 pb-2 border-b-2 border-accent">
                    Competenze
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-primary-700">
                      <li>• Lavoro di squadra</li>
                      <li>• Rapide capacità di apprendimento</li>
                      <li>• Capacità di ascolto</li>
                      <li>• Precisione e concentrazione</li>
                    </ul>
                    <ul className="space-y-2 text-primary-700">
                      <li>• Professionalità</li>
                      <li>• Flessibilità</li>
                      <li>• Disponibilità</li>
                      <li>• Organizzazione</li>
                    </ul>
                  </div>
                </div>

                {/* Lingue */}
                <div>
                  <h3 className="text-2xl font-serif text-primary-900 mb-6 pb-2 border-b-2 border-accent">
                    Lingue
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-primary-900">Italiano</p>
                      <p className="text-primary-600">Madrelingua</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary-900">Inglese</p>
                      <p className="text-primary-600">B2</p>
                    </div>
                  </div>
                </div>

                {/* Altro */}
                <div>
                  <h3 className="text-2xl font-serif text-primary-900 mb-6 pb-2 border-b-2 border-accent">
                    Altro
                  </h3>
                  <p className="text-primary-700">
                    Munita di patente B
                  </p>
                </div>
              </div>
            </div>

            {/* Download Button (Bottom) */}
            <div className="text-center mt-12">
              <a
                href={cvFile}
                download="Curriculum_Elisa_Antoniello.pdf"
                className="btn-primary inline-flex items-center gap-3"
              >
                <FileText size={24} />
                Scarica versione PDF completa
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}