import { useEffect, useState } from 'react'
import scenes from './assets/scenes'
import { Scene, Txt, Door } from './styled'

function App() {
  
  const getSceneByName = title => scenes.find(obj => obj.title == title)
  const [currentScene, setCurrentScene] = useState(getSceneByName('espacio'))

  const[width, setWidth] = useState(0);
  const[height, setHeight] = useState(0);

  const calculateSceneDimensions = () =>{
    const w = window.innerWidth;
    const h = window.innerHeight;
    const a = 16;
    const b = 9;
    const proportion = a/b;
    const proportion2 = w/h;

    if(proportion > proportion2){
      setWidth(w);
      setHeight(w*b/a)
    }else{
      setHeight(h);
      setWidth(h*a/b)
    }
  }

  useEffect(()=>{
    calculateSceneDimensions();
  }, [])

  return (
    <>b
      <Scene back={currentScene.back} width={width} height={height}>
      <Txt>{currentScene.txt}</Txt>
      {
        currentScene.doors.map((door, i) => <Door key={i} onClick={()=>{
          setCurrentScene(getSceneByName(door.target))
        }} data={door}></Door>)
      }
      </Scene>
    </>
  )
}

export default App
