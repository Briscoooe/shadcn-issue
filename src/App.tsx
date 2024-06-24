import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

const ButtonComponent = () => {
  return (
    <div
      className={
        "p-4 text-xl bg-red-100 my-2 rounded hover:bg-red-200 transition cursor-pointer"
      }
    >
      Click me and I don't work :(
    </div>
  );
};

function App() {
  return (
    <div
      className={"bg-white flex flex-col items-center justify-center h-screen"}
    >
      <Sheet>
        <SheetTrigger>
          <div
            className={
              "bg-gray-100 hover:bg-gray-200 transition p-8 text-2xl rounded cursor-pointer"
            }
          >
            Click me to open heloo world
          </div>
        </SheetTrigger>
        <SheetContent className={"bg-white"}>
          <SheetDescription asChild>
            <ul>
              <li>
                <SheetClose asChild>
                  <div
                    className={
                      "p-4 text-xl bg-green-100 my-2 rounded hover:bg-green-200 transition cursor-pointer"
                    }
                  >
                    Click me and I work :)
                  </div>
                </SheetClose>
              </li>
              <li>
                <SheetClose asChild>
                  <ButtonComponent />
                </SheetClose>
              </li>
            </ul>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default App;
