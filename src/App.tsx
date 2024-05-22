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
    <div className={"bg-white flex flex-col items-center"}>
      <Sheet>
        <SheetTrigger>Click me to open</SheetTrigger>
        <SheetContent className={"bg-white"}>
          <SheetDescription asChild>
            <ul>
              <li>
                <SheetClose asChild>
                  <button className={'p-4 text-xl bg-green-100'}>Click me an I work :)</button>
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
