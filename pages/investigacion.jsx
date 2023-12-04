import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

const InvestigacionPage = () => {
  return (
    <DefaultLayout>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
      <h1 className={title()}>Investigaci&oacute;n y Desarrollo</h1>
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
              <TableCell>Gesti&oacute;n de Proyectos de Investigaci&oacute;n</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Colaboraci&oacute;n con la Industria</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Acceso a Recursos Cient&iacute;ficos</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Publicaci&oacute;n y Difusi&oacute;n de Resultados</TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </DefaultLayout>
  );
};

export default InvestigacionPage;