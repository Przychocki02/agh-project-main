import { MainNav } from "@/components/MainNav";
import { navigationLinks } from "../config/navigationLinks";
import { UserNav } from "./CustomersPage/components/UserNav";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Form } from "@/components/ui/Form";
import { Button } from "@/components/ui/Button";

export const AddCustomerPage = () => {
  const [imie, setImie] = useState(""); 
  const [nazwisko, setNazwisko] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [tel, setTel] = useState(""); 
  
  
  const getImie = (event) => {
    setImie(event.target.value); // aktualizacja wartości pola formularza na podstawie wartości wprowadzeonej przez użytkownika
  };

  const getNazwisko = (event) => {
    setNazwisko(event.target.value);
  };

  const getEmail = (event) => {
    setEmail(event.target.value);
  };

  const getTel = (event) => {
    setTel(event.target.value);
  };


  const Dodawanie = (event) => {
    event.preventDefault();
    console.log(imie, nazwisko, email, tel);

    fetch("http://127.0.0.1:8000/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: imie,
        surname: nazwisko,
        email: email,
        phone_number: tel,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    setImie("");
    setNazwisko("");
    setEmail("");
    setTel("");
  };

  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" links={navigationLinks} />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Add customer</h2>
        </div>
        <div>
          <Form>
            <Input
              value={imie}
              onChange={getImie}
              type="text"
              name="imie"
              placeholder="Imię"
            />
            <Input
              value={nazwisko}
              onChange={getNazwisko}
              type="text"
              name="nazwisko"
              placeholder="Nazwisko"
            />
            <Input
              value={email}
              onChange={getEmail}
              type="text"
              name="email"
              placeholder="Email"
            />
            <Input
              value={tel}
              onChange={getTel}
              type="text"
              name="tel"
              placeholder="Numer telefonu"
            />
            <Button type="submit" onClick={Dodawanie}>
              Dodej chopka
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
