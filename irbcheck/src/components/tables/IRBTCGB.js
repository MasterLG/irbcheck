import React from "react";
import BaseTable from "./BaseTable";

const headers = [
  "IRB Id",
  "IRB Şekli",
  "IRB Statü",
  "Giriş Tarihi",
  "Kullanıcı",
  "Hareket",
  "Sınır",
  "Ç.Kullanıcı",
  "Çıkış",
  "Ref No"
];
const data = [
  {
    irbid: "18061600IR000158",
    irbsekli: "0",
    irbstatu: "0",
    giris: "05.10.2018 09:38",
    kul: "10660085118",
    hareket: "061600",
    sinir: "080200",
    cikkul: "12345678901",
    cikis: "07.10.2018 09:38",
    refno: "18061600IR000158"
  },
  {
    irbid: "18061600IR000159",
    irbsekli: "1",
    irbstatu: "5",
    giris: "05.10.2018 09:38",
    kul: "10660085118",
    hareket: "061600",
    sinir: "080200",
    cikkul: "12345678901",
    cikis: "07.10.2018 09:38",
    refno: "18061600IR000159"
  },
  {
    irbid: "18061600IR000160",
    irbsekli: "2",
    irbstatu: "95",
    giris: "05.10.2018 09:38",
    kul: "10660085118",
    hareket: "061600",
    sinir: "080200",
    cikkul: "12345678901",
    cikis: "07.10.2018 09:38",
    refno: "18061600IR000160"
  }
];

const IRBTCGB = () => {
  return (
    <div>
      <BaseTable chip={"İRBTGCB"} headers={headers} data={data} />
    </div>
  );
};
export default IRBTCGB;
