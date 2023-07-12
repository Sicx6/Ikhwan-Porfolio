import React from 'react';
import WorkItem from '../components/work_item'
// import work from '../images/workImg.jpeg';
// import Coming from '../images/coming-soon.jpg';
import tictactoe from '../images/tic_tac_toe.jpg';
import shop from '../images/shopping.jpg';
import news from '../images/news.jpg';
import meals from '../images/meals.jpg';





const WorkList = [
  {title: 'Tic Tac Toe Online', backgroundImage: tictactoe,desc: 'Tic tac toe multiplayer develop using flutter, nodejs, socket and mongoDB', workLink: 'https://github.com/Sicx6/TicTacToe_Multiplayer'},
  {title: 'Shopping apps', backgroundImage: shop , desc:'The apps was built using flutter framework for frontend,NodeJs for the backend and MongoDB and cloudinary for database and media storage.',
 workLink: 'https://github.com/Sicx6/Flutter_Shopping_Apps_Shoppers'},
  {title: 'MyNews Apps', backgroundImage: news, desc: 'Develop to create news apps that simple and minimalist. The apps was built using flutter and also use rest api to pull the data and information regarding the news.',
 workLink: 'https://github.com/Sicx6/Flutter-news-app'},
  {title: 'Flutter Meals Apps', backgroundImage: meals, desc: 'Flutter meals apps was built using flutter, Riverpod as state management. User can find the meals they wanted, filter them, and them to favourite.',
 workLink: 'https://github.com/Sicx6/flutter-meals-apps'},
  
];

const Work = () => {
  return (
    <div name="works" className="w-full md:h-screen bg-[#1b2223]">
      <div className="max-w-[1000px] mx-auto pd-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#0ef6cc]">
            Works
          </p>
          <p className="py-6">Here are my current/previous works</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {WorkList.map ((item, index) => (
            <WorkItem
              // key={index}
              title={item.title}
              backgroundImage={item.backgroundImage}
              desc={item.desc}
              workLink={item.workLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
