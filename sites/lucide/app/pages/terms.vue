<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <div class="prose dark:prose-invert max-w-3xl">
      <h1>Terms of Use</h1>
      <p class="text-sm">Last updated: 26 October 2026</p>
      <p>
        These terms apply to your use of lucideicons.co (the "Site"). By using the Site, you
        agree to them. If you don't agree, please don't use the Site.
      </p>

      <h2>1. What the Site provides</h2>
      <p>
        The Site is a free tool for browsing, previewing, customizing and downloading the
        open-source Lucide icons, along with guides about using them. We may change,
        add or remove features at any time.
      </p>

      <h2>2. The icons and their license</h2>
      <p>
        The icons are © Lucide Icons and Contributors and licensed under the ISC License, not by us.
        Your use of the icons, including anything you download or copy from the Site, is governed
        by that license. See the <NuxtLink to="/license/">license page</NuxtLink>. We don't
        grant any additional rights to the icons or to anyone else's trademarks.
      </p>

      <h2>3. Our content</h2>
      <p>
        The Site's own text, guides and design are owned by Lucideicons. You may quote or link
        to them. Please don't republish substantial parts of our guides without permission.
        Code snippets in the guides may be used freely in your projects.
      </p>

      <h2>4. Acceptable use</h2>
      <p>Please don't:</p>
      <ul>
        <li>use automated tools to download the Site at a rate that degrades it for others (the icons are available directly from Lucide's repository and npm packages if you need them in bulk);</li>
        <li>attempt to disrupt, attack or gain unauthorized access to the Site;</li>
        <li>use the Site to suggest that your product is made or endorsed by the Lucide project or Lucideicons.</li>
      </ul>

      <h2>5. Sponsors and third parties</h2>
      <p>
        The Site shows labeled sponsor cards and links to third-party websites. We're not
        responsible for the content or practices of third-party sites or sponsors. See our
        <NuxtLink to="/privacy-policy/">privacy policy</NuxtLink> for what data sponsor cards use.
      </p>

      <h2>6. No warranty</h2>
      <p>
        The Site and everything on it are provided "as is" and "as available", without
        warranties of any kind, express or implied. We don't guarantee that the Site will be
        available, error-free, or that downloaded files will suit your purpose.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Lucideicons and its operator will not be liable
        for any indirect, incidental, special or consequential damages, or any loss of data,
        profits or revenue, arising from your use of the Site.
      </p>

      <h2>8. Changes</h2>
      <p>
        We may update these terms. The date at the top shows when they last changed. Continued
        use of the Site after a change means you accept the updated terms.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about these terms: <a href="mailto:colton@fluenticons.co">colton@fluenticons.co</a>.
      </p>
    </div>
  </div>
</template>

<script setup>
useSeo({
  title: "Terms of Use",
  description: "Terms for using lucideicons.co, a free viewer for the open-source Lucide icons.",
  path: "/terms",
});
</script>
