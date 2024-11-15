export default function Home() {
  return (
    <div className="flex flex-col gap-16 mb-20">
      <section id="home">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          My Portfolio
        </h1>
        <p className="mb-4 leading-loose">
          北海道出身の Kazuki Ogawa
          と申します。高校卒業後、調理師としてレストラン業界に入り、北海道や東京の複数のレストランで計6年間勤務しました。その中で、業務の効率化や新たな技術の導入に興味を持ち、ITやテクノロジーがビジネスの成長をサポートする方法に関心を抱くようになりました。
          <br />
          <br />
          このような背景から、より広い視野で課題解決に取り組むため、Web開発業界への転職を決意しました。現在、24歳で、技術とビジネスの橋渡し役として活躍できるエンジニアを目指しています。特に、ユーザーのニーズを理解し、ビジネスの視点から技術的な解決策を提供することに興味を持っています。
          <br />
          <br />
          これまでの経験と新たに身につけたWeb開発スキルを活かし、さまざまなプロジェクトで価値を創造していきたいと考えています。どうぞよろしくお願いいたします。
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
        </div>
      </section>
    </div>
  );
}
