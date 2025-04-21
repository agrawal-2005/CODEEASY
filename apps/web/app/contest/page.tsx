import Codeeditor from "../(contest)/Codeeditor";
import Problem from "../(contest)/Problem";
import Testcase from "../(contest)/Testcase";
import { ContestContextProvider } from "../(contest)/(context)/Contest";

export default function Contest() {

    return (
      <ContestContextProvider>
        <main className="flex w-full gap-3">
          <div className="basis-1/3">
              <Problem/>
          </div>
          <div className="flex-col basis-2/3 w-full gap-5">
              <div className="basis-2/3 mb-3">
                <Codeeditor/>
              </div>
              <div className="basis-1/3">
                <Testcase/>
              </div>
          </div>
        </main>
      </ContestContextProvider>
    );
  }