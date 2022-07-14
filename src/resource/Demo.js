// import CallBackTutorial from "./UseCallback/CallbackTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";
// import EffectTutorial from "./UseEffect/EffectTutorial";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
// import LayoutEffectTutorial from "./UseLayoutEffect/LayoutEffectTutorial";
// import MemoTutorial from "./UseMemo/MemoTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import StateTutorial from "./UseState/StateTutorial";
import RefTutorial from "./UseRef/RefTutorial";

function Demo() {
  return (
    <div className='noSelect'>
      <h1 className='noSelect' style={{ marginTop: 30 }}>
        Demo
      </h1>

      <div className='mainSection noSelect'>
        <div className='subSection'>
          <p>CallBackTutorial</p>
          {/* <CallBackTutorial /> */}
        </div>

        <div className='subSection'>
          <p>ContextTutorial</p>
          <ContextTutorial />
        </div>

        <div className='subSection'>
          <p>EffectTutorial</p>
          {/* <EffectTutorial /> */}
        </div>

        <div className='subSection'>
          <p>ImperativeHandle</p>
          <ImperativeHandle />
        </div>

        <div className='subSection'>
          <p>LayoutEffectTutorial</p>
          {/* <LayoutEffectTutorial /> */}
        </div>

        <div className='subSection'>
          <p>MemoTutorial</p>
          {/* <MemoTutorial /> */}
        </div>

        <div className='subSection'>
          <p>ReducerTutorial</p>
          <ReducerTutorial />
        </div>

        <div className='subSection'>
          <p>StateTutorial</p>
          <StateTutorial />
        </div>

        <div className='subSection'>
          <p>RefTutorial</p>
          <RefTutorial />
        </div>
      </div>
    </div>
  );
}

export default Demo;
