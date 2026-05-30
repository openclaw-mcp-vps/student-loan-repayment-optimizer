export default function Home() {
  const faqs = [
    {
      q: 'Which repayment plans does it support?',
      a: 'Standard, Graduated, IBR, PAYE, SAVE, ICR, and extended plans — plus PSLF and Teacher Loan Forgiveness eligibility checks.'
    },
    {
      q: 'Can I add multiple loans?',
      a: 'Yes. Enter all your federal and private loans. The optimizer calculates the best payoff order and total interest saved across your entire portfolio.'
    },
    {
      q: 'Is my data secure?',
      a: 'All calculations run client-side. No loan data is stored on our servers. Your financial information stays private.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Student Loan Optimizer
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Overpaying on{' '}
          <span className="text-[#58a6ff]">Student Loans</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Compare every repayment plan, check forgiveness eligibility, and find the strategy that saves you the most money — in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Start Optimizing — $9/mo
          </a>
          <a href="#faq" className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors">
            Learn More
          </a>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[['10+', 'Repayment Plans'], ['$28k', 'Avg. Savings Found'], ['3 min', 'To Full Analysis']].map(([val, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid sm:grid-cols-3 gap-8 text-center">
          {[
            ['Multi-Loan Calculator', 'Enter all your loans and get a unified payoff strategy with avalanche or snowball ordering.'],
            ['Forgiveness Checker', 'Instantly see if you qualify for PSLF, Teacher, or income-driven forgiveness programs.'],
            ['Scenario Comparison', 'Side-by-side view of every plan — total paid, payoff date, and monthly payment.']
          ].map(([title, desc]) => (
            <div key={title as string}>
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-[#8b949e]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-8">One plan. Everything included.</p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8">
          <div className="text-4xl font-bold text-white mb-1">$9<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Cancel anytime</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited loan scenarios',
              'All federal repayment plans',
              'PSLF & forgiveness eligibility',
              'Avalanche & snowball strategies',
              'Exportable PDF reports',
              'Priority email support'
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#21262d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Student Loan Repayment Optimizer. Not financial advice.
      </footer>
    </main>
  )
}
