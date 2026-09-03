# AWS Static Hosting Plan

Target host: `www.vepolink.com`

Recommended setup:

- S3 bucket: `vepolink-website-preview-268465972669`, private origin for static files
- CloudFront: public HTTPS CDN
- ACM certificate: `us-east-1`, covering `www.vepolink.com` and optionally `vepolink.com`
- Route 53: `A/AAAA` alias from `www.vepolink.com` to CloudFront
- CloudFront Function: `deploy/cloudfront-clean-urls.js` for directory index rewrites, `/about -> /about/`, `/wqms -> /water-quality-monitoring/`, and apex-to-www redirects
- CloudFront custom error responses: map origin `403` and `404` responses to `/404.html` while returning status `404`

## Local Deploy Sync

After AWS resources exist, sync the site files:

```bash
aws s3 sync . s3://vepolink-website-preview-268465972669 \
  --delete \
  --exclude ".git/*" \
  --exclude ".DS_Store" \
  --exclude "deploy/*" \
  --exclude "_preserved/*" \
  --exclude "assets/team/*.png"
```

Then invalidate CloudFront:

```bash
aws cloudfront create-invalidation \
  --distribution-id DISTRIBUTION_ID \
  --paths "/*"
```

## DNS

Create these Route 53 records after CloudFront is deployed:

- `A` alias: `www.vepolink.com` -> CloudFront distribution
- `AAAA` alias: `www.vepolink.com` -> CloudFront distribution

Optional but recommended:

- Redirect apex `vepolink.com` to `https://www.vepolink.com/`

## Notes

- The site canonical URLs, Open Graph URLs, schema URLs, sitemap, and robots file are configured for `https://www.vepolink.com`.
- `about.html` is a compatibility redirect to `/about/`.
- The retired `/product/` page is preserved in `_preserved/old-product-page/` and excluded from deploy sync.
- The former water-focused homepage now lives at `/water-quality-monitoring/`.
- Clean URL support requires the CloudFront Function in `deploy/cloudfront-clean-urls.js`.
