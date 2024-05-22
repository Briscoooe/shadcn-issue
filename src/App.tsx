import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

const ButtonComponent = () => {
  return <button className={'p-4 text-xl bg-red-100'}>Click me and I don't work :(</button>;
};

function App() {
  return (
    <div className={"bg-white flex flex-col items-center justify-center h-screen"}>
      <Sheet>
        <SheetTrigger>
          <button className={'bg-gray-100 p-8 text-2xl'}>
            Click me to open
          </button>
        </SheetTrigger>
        <SheetContent className={"bg-white"}>
          <SheetDescription asChild>
            <ul>
              <li>
                <SheetClose asChild>
                  <button className={'p-4 text-xl bg-green-100'}>Click me and I work :)</button>
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
