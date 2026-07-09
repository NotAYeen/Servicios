/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        white: 'rgb(var(--color-white) / <alpha-value>)',
        accent: 'var(--accent)',
        accentSoft: 'var(--accent-soft)',
        gold: 'var(--gold)',
        goldSoft: 'var(--gold-soft)',
        coral: 'var(--coral)',
        coralSoft: 'var(--coral-soft)',
        fg: 'var(--fg)',
        muted: 'var(--muted)'
      },
      fontSize: {
        xs: ['0.875rem', '1.25rem'],
        sm: ['1rem', '1.5rem'],
        base: ['1.125rem', '1.75rem'],
        lg: ['1.25rem', '1.75rem'],
        xl: ['1.375rem', '2rem']
      }
    }
  }
}
