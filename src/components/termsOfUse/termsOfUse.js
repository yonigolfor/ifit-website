const TermsOfUse = () => {
  return (
    <div className="privacy-policy" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', color: "whitesmoke", backgroundColor: 'black', minHeight: "100vh" }}>
      <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated: April 27, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By using the Fituro app, you agree to be bound by these Terms of Use. If you do not agree to
          these terms, please do not use the app.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Use of the App</h2>
        <p>
          You agree to use the Fituro app only for lawful purposes and in a way that does not infringe
          on the rights of others or restrict or inhibit their use of the app.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
        <p>
          All content in the Fituro app, including logos, design, and text, is owned by us or our
          partners. You may not copy, modify, or distribute any part of the app without our prior
          written consent.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Disclaimer</h2>
        <p>
          The app is provided "as is" and we make no warranties regarding its accuracy or reliability.
          Use the app at your own risk.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Changes to Terms</h2>
        <p>
          We may update these Terms of Use at any time. Continued use of the app after changes
          indicates your acceptance of the new terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Subscriptions and Payments</h2>
        <p>
          The Fituro app may offer auto-renewable subscriptions. 
          Payment will be charged to your Apple ID account at confirmation of purchase. 
          Subscriptions automatically renew unless canceled at least 24 hours before the end of the 
          current billing period. You can manage and cancel your subscriptions by going to your 
          account settings on the App Store after purchase.
        </p>
      </section>



      <section className="mt-10">
        <p className="text-sm text-gray-500">
          For more information, please review our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsOfUse;
