import { useEffect } from "react"
import Routes from "./routes"
import { isAuth } from "./services"
import { useAppDispatch} from "./redux/hooks"

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe= isAuth();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    }

  }, [dispatch]);

  return (
    <>
      <div className="max-w-7xl w-full min-h-screen mx-auto font-[Roboto Condensed] overflow-hidden" >
        <Routes />
      </div>
    </>
  )
}

export default App
