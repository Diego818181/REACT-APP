import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

const MatriculaPage = () => {
  return (
    <DefaultLayout>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
      <h1 className={title()}>Admisi&oacute;n y Matr&iacute;cula</h1>
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
              <TableCell>Proceso de Admisi&oacute;n Online</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Inscripci&oacute;n y Matr&iacute;cula Electr&oacute;nica</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Evaluaci&oacute;n de Solicitudes de Admisi&oacute;n</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Gesti&oacute;n de Cupos y Grupos</TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </DefaultLayout>
  );
};

export default MatriculaPage;