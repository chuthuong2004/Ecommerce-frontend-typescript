import React, { Suspense, memo } from 'react';
const NewsLetterFooter = React.lazy(async () => await import('../NewsLetterFooter'));
const SocialFooter = React.lazy(async () => await import('../SocialFooter'));
const FooterMain = React.lazy(async () => await import('../FooterMain'));
function Footer() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewsLetterFooter />
      <SocialFooter />
      <FooterMain />
    </Suspense>
  );
}

export default memo(Footer);
