
import React, { useState, useMemo } from 'react';
import { Category, Article } from './types';
import { SAMPLE_ARTICLES, AUTHORS, CATEGORY_ICONS } from './data';
import Librarian from './Librarian';

// --- Components ---

const Navbar = ({ setView }: { setView: (v: string) => void }) => (
  <nav className="bg-white border-b border-library-100 sticky top-0 z-40 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center cursor-pointer" onClick={() => setView('home')}>
          <div className="w-8 h-8 bg-library-900 text-white flex items-center justify-center rounded mr-2 font-serif font-bold text-lg">K</div>
          <span className="font-serif font-bold text-xl text-library-900 tracking-tight">Original Concepts | Kallol</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => setView('home')} className="text-library-600 hover:text-library-900 px-3 py-2 text-sm font-medium transition-colors">Home</button>
          <button onClick={() => setView('browse')} className="text-library-600 hover:text-library-900 px-3 py-2 text-sm font-medium transition-colors">Library Catalog</button>
          <button onClick={() => setView('about')} className="text-library-600 hover:text-library-900 px-3 py-2 text-sm font-medium transition-colors">About Author</button>
        </div>
        <div className="flex items-center md:hidden">
           <button onClick={() => setView('browse')} className="text-library-700"><span className="material-symbols-outlined">search</span></button>
        </div>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-library-900 text-library-300 py-12 mt-20 border-t border-library-800">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
      <div>
        <h3 className="font-serif text-white text-lg mb-4">Original Concepts</h3>
        <p className="leading-relaxed">
          The digital library of Kallol Chakrabarti. A space dedicated to preserving and exploring unique ideas, philosophy, governance models, and future concepts.
        </p>
      </div>
      <div>
        <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-xs">Browse</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-white transition-colors">Governance Frameworks</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Dharma & Ethics</a></li>
          <li><a href="#" className="hover:text-white transition-colors">AI & Technology</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-medium mb-4 uppercase tracking-wider text-xs">Connect</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-white transition-colors">ORCID: 0009-0007-4971-8936</a></li>
          <li><a href="#" className="hover:text-white transition-colors">SSRN Profile</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Zenodo Profile</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-library-800 text-center text-xs">
      &copy; {new Date().getFullYear()} Original Concepts | Kallol Chakrabarti. All rights reserved.
    </div>
  </footer>
);

const Hero = ({ setView }: { setView: (v: string) => void }) => (
  <div className="bg-library-900 text-white py-20 px-4 relative overflow-hidden">
    {/* Abstract Background */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-library-800 to-transparent opacity-50"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-library-700 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>
    
    <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-center md:text-left">
        <span className="inline-block py-1 px-3 rounded-full bg-library-800 border border-library-700 text-accent text-xs font-bold tracking-wide uppercase mb-6">
          Independent Research Library
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Kallol Chakrabarti: <br/><span className="text-library-300 italic">Original Concepts & Research.</span>
        </h1>
        <p className="text-lg text-library-200 mb-8 max-w-2xl leading-relaxed">
          Explore over 160 documented original concepts, 239 DOIs, and 3,850+ downloads. 
          Featuring the Helix Doctrine, DPTAS, and VAFGPE frameworks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button 
            onClick={() => setView('browse')} 
            className="bg-white text-library-900 hover:bg-library-50 px-8 py-4 rounded shadow-lg font-bold transition-all flex items-center justify-center"
          >
            Access Catalog <span className="material-symbols-outlined ml-2">library_books</span>
          </button>
          <a href="#most-read" className="text-library-300 hover:text-white px-8 py-4 rounded font-medium transition-colors border border-transparent hover:border-library-600">
             View Top Concepts
          </a>
        </div>
      </div>
      
      {/* Stats Box */}
      <div className="hidden md:block w-1/3 relative">
         <div className="bg-library-800 p-6 rounded-lg border border-library-700 shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
               <div className="p-3 bg-library-700/50 rounded">
                  <div className="text-2xl font-bold text-accent">239</div>
                  <div className="text-xs text-library-300">DOIs Registered</div>
               </div>
               <div className="p-3 bg-library-700/50 rounded">
                  <div className="text-2xl font-bold text-accent">3,850+</div>
                  <div className="text-xs text-library-300">Downloads</div>
               </div>
               <div className="p-3 bg-library-700/50 rounded">
                  <div className="text-2xl font-bold text-accent">Top 2%</div>
                  <div className="text-xs text-library-300">Global Research</div>
               </div>
               <div className="p-3 bg-library-700/50 rounded">
                  <div className="text-2xl font-bold text-accent">160+</div>
                  <div className="text-xs text-library-300">Concepts</div>
               </div>
            </div>
         </div>
      </div>
    </div>
  </div>
);

const ArticleCard: React.FC<{ article: Article, onClick: () => void }> = ({ article, onClick }) => {
  const author = AUTHORS[article.authorId];
  return (
    <div 
      onClick={onClick}
      className="group bg-white border border-library-100 rounded-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden relative">
        <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold uppercase tracking-wider text-library-800 shadow-sm">
          {article.category}
        </div>
        {article.featured && (
          <div className="absolute top-3 right-3 bg-accent text-library-900 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider shadow-sm">
             Featured
          </div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-serif font-bold text-xl text-library-900 mb-3 group-hover:text-library-600 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-library-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
          {article.summary}
        </p>
        <div className="flex items-center pt-4 border-t border-library-50 mt-auto">
          {author && (
             <>
             <img src={author.avatarUrl} alt={author.name} className="w-8 h-8 rounded-full mr-3 bg-library-100" />
             <div className="text-xs text-library-400">
                <span className="font-medium text-library-700 block">{author.name}</span>
                <span>{article.publishDate}</span>
             </div>
             </>
          )}
        </div>
      </div>
    </div>
  );
};

const ArticleReader = ({ article, onBack }: { article: Article, onBack: () => void }) => {
  const author = AUTHORS[article.authorId];
  return (
    <div className="animate-fade-in pb-20">
      <button onClick={onBack} className="mb-8 text-library-500 hover:text-library-800 flex items-center text-sm font-medium transition-colors">
        <span className="material-symbols-outlined mr-1 text-lg">arrow_back</span> Back to Catalog
      </button>
      
      <article className="bg-white shadow-sm border border-library-100 rounded-xl overflow-hidden max-w-4xl mx-auto">
        <div className="h-64 md:h-96 relative">
           <img src={article.imageUrl} className="w-full h-full object-cover" alt={article.title} />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
           <div className="absolute bottom-0 left-0 p-8 text-white">
             <span className="bg-library-500/80 backdrop-blur-md px-2 py-1 rounded text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                {article.category}
             </span>
             <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4 text-shadow">
               {article.title}
             </h1>
           </div>
        </div>

        <div className="max-w-3xl mx-auto px-8 py-12">
           <div className="flex items-center justify-between mb-10 pb-8 border-b border-library-100">
             <div className="flex items-center">
               {author && <img src={author.avatarUrl} className="w-12 h-12 rounded-full ring-4 ring-library-50 mr-4" alt={author.name} />}
               <div>
                 <div className="font-bold text-library-900 font-serif">{author?.name || 'Unknown'}</div>
                 <div className="text-xs text-library-500">{author?.role}</div>
               </div>
             </div>
             <div className="text-right hidden sm:block">
               <div className="text-sm font-medium text-library-900">{article.readTimeMinutes} min read</div>
               <div className="text-xs text-library-400">{article.views} views</div>
             </div>
           </div>

           <div className="prose prose-lg prose-library mx-auto font-serif text-library-800" dangerouslySetInnerHTML={{ __html: article.content }} />

           <div className="mt-16 pt-10 border-t border-library-100">
             <h3 className="font-sans font-bold text-lg mb-6">Tags</h3>
             <div className="flex flex-wrap gap-2">
               {article.tags.map(tag => (
                 <span key={tag} className="bg-library-100 text-library-700 px-3 py-1 rounded-full text-sm hover:bg-library-200 cursor-default">
                   #{tag}
                 </span>
               ))}
             </div>
           </div>
        </div>
      </article>
    </div>
  );
}

const BrowseView = ({ 
  onArticleClick 
}: { 
  onArticleClick: (a: Article) => void 
}) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const filteredArticles = useMemo(() => {
    return SAMPLE_ARTICLES.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(search.toLowerCase()) || 
                            article.summary.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-10">
        <h2 className="font-serif text-3xl font-bold text-library-900 mb-6">Full Library Catalog</h2>
        
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-lg border border-library-200 shadow-sm">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-library-400">search</span>
            <input 
              type="text" 
              placeholder="Search titles..." 
              className="w-full pl-10 pr-4 py-2 border border-library-200 rounded-md focus:outline-none focus:ring-2 focus:ring-library-200 transition-shadow"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            <button 
              onClick={() => setSelectedCategory('All')}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === 'All' ? 'bg-library-800 text-white' : 'bg-library-100 text-library-600 hover:bg-library-200'}`}
            >
              All
            </button>
            {Object.values(Category).map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${selectedCategory === cat ? 'bg-library-800 text-white' : 'bg-library-100 text-library-600 hover:bg-library-200'}`}
              >
                {selectedCategory === cat && <span className="material-symbols-outlined text-[16px]">{CATEGORY_ICONS[cat]}</span>}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredArticles.length === 0 ? (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-6xl text-library-200 mb-4">sentiment_dissatisfied</span>
          <h3 className="text-xl font-medium text-library-500">No articles found.</h3>
          <button onClick={() => {setSearch(''); setSelectedCategory('All')}} className="mt-4 text-library-800 underline">Reset Search</button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <ArticleCard key={article.id} article={article} onClick={() => onArticleClick(article)} />
          ))}
        </div>
      )}
    </div>
  );
}

const AboutView = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <div className="bg-white rounded-xl shadow-sm border border-library-200 overflow-hidden">
      <div className="bg-library-800 p-8 text-white flex items-center gap-6">
        <img src={AUTHORS['kallol'].avatarUrl} alt="Kallol Chakrabarti" className="w-24 h-24 rounded-full border-4 border-white/20" />
        <div>
            <h2 className="font-serif text-3xl font-bold mb-2">Kallol Chakrabarti</h2>
            <p className="text-library-200">Independent Researcher & Helix Originator</p>
        </div>
      </div>
      <div className="p-8 space-y-6 text-library-800 leading-relaxed">
        <p className="font-serif text-xl text-library-900">
            "The highest number of documented and verifiable independent research contributions by an unaffiliated researcher globally."
        </p>
        <p>
            Kallol Chakrabarti is an Independent Researcher, Helix Originator, and Founder of Docu Helix. With over 3,850 downloads across SSRN, Zenodo, and other platforms, he is recognized as a leading independent researcher with global readership.
        </p>
        <p>
            As the Helix Originator and founder of Docu Helix, I drive policy innovation and transparent research, recognized by the Election Commission of India for Safeguarding Democratic Truth, the Assam Chief Minister's Office for Transformational Governance (Ref. No. 3726013), and invited as peer reviewer for Academia AI and Applications (San Francisco, October 7, 2025).
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-library-50 p-4 rounded border border-library-100">
                <h4 className="font-bold text-library-900 mb-2">Key Innovations</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Vedic Analytical Framework (VAFGPE)</li>
                    <li>Digital Promise Tracking (DPTAS)</li>
                    <li>Helix Doctrine</li>
                    <li>Sanatana Samyata</li>
                </ul>
            </div>
            <div className="bg-library-50 p-4 rounded border border-library-100">
                <h4 className="font-bold text-library-900 mb-2">Credentials</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Harvard University (edX) certification in Rhetoric</li>
                    <li>25 Research Articles (Novelty Index 90+)</li>
                    <li>Indian Patent No. 202411090481</li>
                    <li>Ranked top 2% of researchers (downloads)</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
)

// --- Main App ---

export default function App() {
  const [view, setView] = useState('home');
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);

  const navigateToArticle = (article: Article) => {
    setActiveArticleId(article.id);
    setView('article');
    window.scrollTo(0,0);
  };

  const navigateToBrowse = () => {
    setView('browse');
    window.scrollTo(0,0);
  }

  const activeArticle = SAMPLE_ARTICLES.find(a => a.id === activeArticleId);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-library-50">
      <Navbar setView={setView} />

      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero setView={setView} />
            
            {/* Categories Quick Access */}
            <div className="border-b border-library-100 bg-white shadow-sm py-8">
               <div className="max-w-7xl mx-auto px-4">
                 <div className="flex justify-between items-center overflow-x-auto gap-4 hide-scrollbar py-2">
                    {Object.values(Category).map(cat => (
                      <button 
                        key={cat} 
                        onClick={navigateToBrowse}
                        className="flex items-center space-x-2 px-4 py-2 bg-library-50 rounded-full text-sm font-medium text-library-600 hover:bg-library-100 hover:text-library-800 whitespace-nowrap transition-colors"
                      >
                        <span className="material-symbols-outlined text-lg">{CATEGORY_ICONS[cat]}</span>
                        <span>{cat}</span>
                      </button>
                    ))}
                 </div>
               </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-4 gap-12">
              
              {/* Main Content Area */}
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-2xl font-bold text-library-900 border-l-4 border-accent pl-4">Latest Concepts</h2>
                  <button onClick={navigateToBrowse} className="text-library-600 hover:text-library-900 text-sm font-medium flex items-center">
                    View Full Catalog <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                  </button>
                </div>
                
                {/* Articles Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {SAMPLE_ARTICLES.slice(0, 12).map(article => (
                    <ArticleCard key={article.id} article={article} onClick={() => navigateToArticle(article)} />
                  ))}
                </div>
                
                <div className="mt-12 text-center">
                  <button onClick={navigateToBrowse} className="inline-flex items-center justify-center px-8 py-3 border border-library-300 shadow-sm text-sm font-medium rounded-md text-library-700 bg-white hover:bg-library-50 transition-colors">
                    Load More Articles
                  </button>
                </div>
              </div>

              {/* Sidebar / Most Read */}
              <div className="space-y-12">
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-library-100" id="most-read">
                    <h3 className="font-serif font-bold text-lg mb-6 pb-2 border-b border-library-100">Featured Concepts</h3>
                    <div className="space-y-6">
                       {SAMPLE_ARTICLES.filter(a => a.featured).slice(0, 5).map((article, idx) => (
                         <div key={article.id} className="flex gap-4 group cursor-pointer" onClick={() => navigateToArticle(article)}>
                           <span className="text-3xl font-serif text-library-200 font-bold group-hover:text-library-400 transition-colors">0{idx + 1}</span>
                           <div>
                             <h4 className="font-bold text-library-800 text-sm leading-snug mb-1 group-hover:text-accent transition-colors">{article.title}</h4>
                             <span className="text-xs text-library-400 uppercase tracking-wider">{article.category}</span>
                           </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="bg-library-800 p-6 rounded-xl text-white">
                    <h3 className="font-serif font-bold text-lg mb-4">Contact Author</h3>
                    <p className="text-sm text-library-300 mb-4">Interested in collaborating or citing this research?</p>
                    <button onClick={() => setView('about')} className="w-full bg-accent text-library-900 font-bold py-2 rounded text-sm hover:bg-yellow-500 transition-colors">View Profile</button>
                 </div>
              </div>

            </div>
          </>
        )}

        {view === 'browse' && (
          <BrowseView onArticleClick={navigateToArticle} />
        )}

        {view === 'article' && activeArticle && (
          <div className="max-w-7xl mx-auto px-4 py-8">
             <ArticleReader article={activeArticle} onBack={navigateToBrowse} />
          </div>
        )}

        {view === 'about' && (
          <AboutView />
        )}
      </main>

      <Footer />
      <Librarian />
    </div>
  );
}
