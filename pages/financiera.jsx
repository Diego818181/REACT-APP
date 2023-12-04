import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

const FinancieraPage = () => {
  return (
    <DefaultLayout>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
      <h1 className={title()}>Administraci&oacute;n Financiera</h1>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        
      </div>
      </div>
      </section>
      <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn><h2 className={subtitle()}>Capacidades</h2></TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Presupuesto y Planificaci&oacute;n Financiera</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Facturaci&oacute;n de Matr&iacute;culas y Servicios</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Control de Gastos y Costos Operativos</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Informes Financieros y Auditor&iacute;a</TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </DefaultLayout>
  );
};

export default FinancieraPage;