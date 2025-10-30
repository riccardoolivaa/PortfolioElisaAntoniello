import { Download, FileText } from 'lucide-react';

export default function CV() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 animate-fade-in">
            Curriculum Vitae
          </h1>
          <p className="text-xl text-white/80 max-w-3xl animate-fade-in animate-delay-100">
            Professional experience, education, and skills in scenic design and theatrical production
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 bg-white">
        <div className="container-custom text-center">
          <a
            href="/cv/Elisa_Antonielo_CV.pdf"
            download
            className="btn-primary inline-flex items-center gap-3"
          >
            <Download size={24} />
            Download CV (PDF)
          </a>
        </div>
      </section>

      {/* CV Preview */}
      <section className="section-padding bg-warm-gray">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* CV Content - Alternative to PDF embed */}
            <div className="bg-white rounded-xl stage-shadow p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif text-primary-900 mb-2">
                  Elisa Antonielo
                </h2>
                <p className="text-xl text-primary-600">Scenic Design Student</p>
                <p className="text-primary-500 mt-2">
                  Milano, Italy · elisa.antonielo@example.com · +39 123 456 7890
                </p>
              </div>

              <div className="space-y-12">
                {/* Education */}
                <div>
                  <h3 className="text-2xl font-serif text-primary-900 mb-6 pb-2 border-b-2 border-accent">
                    Education
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-primary-900">
                          Scenic Design Course
                        </h4>
                        <span className="text-primary-600">2023 - Present</span>
                      </div>
                      <p className="text-primary-700 font-medium">
                        Teatro alla Scala Academy, Milan
                      </p>
                      <p className="text-primary-600 mt-2">
                        Comprehensive training in stage design, lighting, audio engineering, and theatrical production. 
                        Specializing in contemporary approaches to classical theater spaces.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Professional Experience */}
                <div>
                  <h3 className="text-2xl font-serif text-primary-900 mb-6 pb-2 border-b-2 border-accent">
                    Professional Experience
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-primary-900">
                          Scenic Design Assistant
                        </h4>
                        <span className="text-primary-600">2024</span>
                      </div>
                      <p className="text-primary-700 font-medium">
                        Teatro alla Scala, Milan
                      </p>
                      <ul className="list-disc list-inside text-primary-600 mt-2 space-y-1">
                        <li>Assisted lead designer on major opera production</li>
                        <li>Coordinated with technical teams for set construction</li>
                        <li>Managed design documentation and technical drawings</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-primary-900">
                          Lighting Design Intern
                        </h4>
                        <span className="text-primary-600">2023 - 2024</span>
                      </div>
                      <p className="text-primary-700 font-medium">
                        Teatro alla Scala Academy
                      </p>
                      <ul className="list-disc list-inside text-primary-600 mt-2 space-y-1">
                        <li>Programmed lighting for student productions</li>
                        <li>Operated lighting consoles during rehearsals and performances</li>
                        <li>Maintained lighting equipment and inventory</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-2xl font-serif text-primary-900 mb-6 pb-2 border-b-2 border-accent">
                    Technical Skills
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-3">Scenic Design</h4>
                      <ul className="space-y-2 text-primary-600">
                        <li>• Stage design & spatial planning</li>
                        <li>• Set construction & model making</li>
                        <li>• Technical drawing (AutoCAD, SketchUp)</li>
                        <li>• Materials selection & budgeting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-3">Lighting Design</h4>
                      <ul className="space-y-2 text-primary-600">
                        <li>• Lighting programming & control</li>
                        <li>• Atmospheric design & color theory</li>
                        <li>• Console operation (ETC, MA)</li>
                        <li>• LED & conventional fixtures</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-3">Audio Engineering</h4>
                      <ul className="space-y-2 text-primary-600">
                        <li>• Sound design & mixing</li>
                        <li>• Audio equipment setup</li>
                        <li>• Acoustic management</li>
                        <li>• Digital audio workstations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-3">Photography</h4>
                      <ul className="space-y-2 text-primary-600">
                        <li>• Theatrical photography</li>
                        <li>• Backstage documentation</li>
                        <li>• Post-production & editing</li>
                        <li>• Visual storytelling</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h3 className="text-2xl font-serif text-primary-900 mb-6 pb-2 border-b-2 border-accent">
                    Languages
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="font-semibold text-primary-900">Italian</p>
                      <p className="text-primary-600">Native</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary-900">English</p>
                      <p className="text-primary-600">Professional</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary-900">French</p>
                      <p className="text-primary-600">Intermediate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Button (Bottom) */}
            <div className="text-center mt-12">
              <a
                href="/cv/Elisa_Antonielo_CV.pdf"
                download
                className="btn-primary inline-flex items-center gap-3"
              >
                <FileText size={24} />
                Download Full PDF Version
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
