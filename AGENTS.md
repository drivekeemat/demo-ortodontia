<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- All clinic-specific data (contacts, treatments, team, reviews, images) lives in src/config/site.ts — keeps the site reusable for other clinics.
- WhatsApp links and analytics events go through src/lib/tracking.ts — one place to change number and plug in GTM/GA4/Pixel.
