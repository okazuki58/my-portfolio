export default function Home() {
  return (
    <div className="flex flex-col gap-16 mb-20">
      <section id="home">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          My Portfolio
        </h1>
        <p className="mb-4 leading-loose">
          北海道出身の Kazuki Ogawa
          と申します。高校卒業後、調理師としてレストラン業界に入り、北海道や東京の複数のレストランで計6年間勤務しました。この期間、料理人としてのスキルを磨く一方で、飲食業界におけるさまざまな課題、とりわけ業務の非効率性に気づく機会が多くありました。
          <br /><br />
          たとえば、在庫管理や予約管理が手作業中心でミスが発生しやすいことや、スタッフ間で情報共有が不十分なために生じる無駄など、多くの場面で改善の余地を感じていました。しかし、料理人という立場からでは、それらの課題を根本的に解決することは難しいと痛感しました。この経験から、ITやテクノロジーを活用することで業務の効率化や労働環境の改善に貢献したいという想いが強くなりました。
          <br /><br />
          また、飲食業界だけでなく、どの業界においても非効率な業務プロセスは多く存在しており、それを解決する手段としてIT技術が欠かせないと考えています。そのため、私は開発スキルを学び、効率的なシステムやツールを通じて企業や社会の課題解決に取り組むエンジニアを目指すことを決意しました。
          <br /><br />
          現在24歳で、技術とビジネスの橋渡し役として成長し、ユーザーのニーズを深く理解しながら、実用的で効果的なソリューションを提供できるような人材を目指しています。これまでの飲食業界で培った問題発見能力や現場目線を活かし、IT業界でも価値を創造していきたいと考えています。
          <br /><br />
          どうぞよろしくお願いいたします。
        </p>
      </section>
      <section id="works">
        <h2 className="mb-8 text-2xl font-semibold tracking-tighter">Works</h2>
        <a href="http://ikki-mi.com" target="_blank" rel="noopener noreferrer">
          <div className="relative flex items-center border rounded-lg w-full overflow-hidden group">
            <div className="absolute inset-0 bg-slate-300 opacity-0 group-hover:opacity-25 transition-opacity duration-300 ease-in-out cursor-pointer"></div>
            <div className="flex flex-col flex-grow gap-1 p-4">
              <h3 className="text-lg font-semibold tracking-tighter">Ikkimi</h3>
              <p className="text-xs text-gray-500">
                オンラインでマンガ本棚がつくれるWebアプリ
              </p>
              <div className="flex items-center gap-2">
                <img src="/logo-2.svg" alt="ikkimi" className="w-3" />
                <p className="text-sm text-gray-800">ikki-mi.com</p>
              </div>
            </div>
            <div className="h-full w-2/5 flex-none">
              <picture className="h-full w-full">
                <source srcSet="/sq-image.png" media="(max-width: 640px)" />
                <img
                  src="/rec-image.png"
                  alt="ikkimi"
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>
          </div>
        </a>
        <p className="text-sm mt-4 leading-loose">
          Next.jsの勉強で作ったWebアプリケーションです。制作には1ヶ月半ほどかかりました。TailwindCSSやTypeScript,
          Supabaseを使い、ログイン機能も実装しました。 詳しくは「
          <a
            href="https://zenn.dev/0221/articles/1ac0c9de1b0c72"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            オンラインで自分だけのマンガ本棚を公開できるサービスをつくりました
          </a>
          」で紹介していますので、よければそちらもご覧ください。
        </p>
      </section>

      <section id="skills">
        <h2 className="mb-8 text-2xl font-semibold tracking-tighter">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <i className="devicon-javascript-plain text-xl"></i>
            <p className="text-base font-normal">JavaScript</p>
          </div>
          <div className="flex items-center gap-2">
            <i className="devicon-react-original text-xl"></i>
            <p className="text-base font-normal">React</p>
          </div>
          <div className="flex items-center gap-2">
            <i className="devicon-typescript-plain text-xl"></i>
            <p className="text-base font-normal">TypeScript</p>
          </div>
          <div className="flex items-center gap-2">
            <i className="devicon-nodejs-plain text-xl"></i>
            <p className="text-base font-normal">Node.js</p>
          </div>
          <div className="flex items-center gap-2">
            <i className="devicon-tailwindcss-plain text-xl"></i>
            <p className="text-base font-normal">Tailwind CSS</p>
          </div>
          <div className="flex items-center gap-2">
            <i className="devicon-github-original text-xl"></i>
            <p className="text-base font-normal">GitHub</p>
          </div>
          <div className="flex items-center gap-2">
            <i className="devicon-figma-plain text-xl"></i>
            <p className="text-base font-normal">Figma</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/openai-logomark.svg" alt="chatgpt" className="w-5" />
            <p className="text-base font-normal">ChatGPT</p>
          </div>
        </div>
      </section>
    </div>
  );
}
