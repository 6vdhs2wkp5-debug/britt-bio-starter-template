# Resume source

`resume.html` is the source for `public/Brittany-Helm-Resume.pdf` (the file the site's "Resume" buttons download).

To rebuild the PDF after editing it (needs Playwright + the Carlito font):

```bash
node resume-source/build-pdf.cjs "$PWD/resume-source/resume.html" public/Brittany-Helm-Resume.pdf
```

Keep it on one page, and keep `src/resume.ts` in sync with it.
