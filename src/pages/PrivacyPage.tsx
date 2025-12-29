const PrivacyPage = () => {
  return (
    <main>
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
          <p className="text-white/80 mt-4">Last updated: December 2024</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <p>
                  When you contact us through our website, we collect personal information that you voluntarily provide, including your name, email address, phone number, and the content of your message. We use this information solely to respond to your inquiries and provide our manufacturing services.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Respond to your inquiries and provide customer service</li>
                  <li>Process and fulfill manufacturing orders</li>
                  <li>Send you relevant business communications</li>
                  <li>Improve our services and website experience</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Data Protection</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and accessed only by authorized personnel.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Third-Party Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                <p>
                  You have the right to access, correct, or delete your personal information. To exercise these rights or if you have any questions about this privacy policy, please contact us at jugnuenterprises786@gmail.com.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p>
                  For any privacy-related concerns or inquiries, please contact us at:
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

export default PrivacyPage;
