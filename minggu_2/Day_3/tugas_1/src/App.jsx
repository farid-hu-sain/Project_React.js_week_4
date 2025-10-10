import Application1 from "./components/CleanupFunction.jsx";
import Application3 from "./components/ContextApi.jsx";
import Application from "./components/DependencyArray.jsx";
import MultiEffectComponent from "./components/MultipleUseEffect.jsx";
import UseEffectHook from "./components/UseEffectHook.jsx";


export default function App() {
  return(
    <div>
   <UseEffectHook/>
    <hr/>
    <Application/>
    <hr />
    <Application1/>
    <hr />
    <MultiEffectComponent/>
    <hr />
    <Application3/>
    <hr />
    </div>

  )
}