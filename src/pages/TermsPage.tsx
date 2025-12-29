const TermsPage = () => {
  return (
    <main>
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Terms of Service</h1>
          <p className="text-white/80 mt-4">Last updated: December 2024</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                <p>
                  By accessing and using this website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Business Services</h2>
                <p>
                  Jugnu Enterprises provides apparel manufacturing services. All business inquiries and orders are subject to separate commercial agreements that will be provided upon request.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
                <p>
                  All content on this website, including text, images, logos, and graphics, is the property of Jugnu Enterprises and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use this content without prior written permission.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p>
                  Jugnu Enterprises shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or our services. Our liability is limited to the extent permitted by applicable law.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Ludhiana, Punjab.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective upon posting on this website. Your continued use of the website constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Contact</h2>
                <p>
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-2">
                  <strong className="text-foreground">Jugnu Enterprises</strong><br />
                  Basti Jodhewal, Ludhiana, Punjab, India<br />
                  Email: jugnuenterprises786@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;
