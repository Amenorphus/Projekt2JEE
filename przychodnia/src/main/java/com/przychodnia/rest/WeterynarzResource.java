package com.przychodnia.rest;

import com.przychodnia.dao.WeterynarzDAO;
import com.przychodnia.domain.Weterynarz;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.sql.Date;
import java.util.List;

@Stateless
@Path("/weterynarz")

public class WeterynarzResource
{
	@EJB
    private WeterynarzDAO weterynarzManager;

    @POST
    @Path("/addWeterynarz")
    public Response addWeterynarz(@FormParam("imie") String imie,
                                @FormParam("nazwisko") String nazwisko)
                                
    {
        Weterynarz weterynarz = new Weterynarz();
        weterynarz.setImie(imie);
        weterynarz.setNazwisko(nazwisko);

        weterynarzManager.addWeterynarz(weterynarz);

        return Response.status(Response.Status.CREATED).build();
    }

    @GET
    @Path("/getAllWeterynarzs")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Weterynarz> getAllWeterynarzs() {
        return weterynarzManager.getAllWeterynarzs();
    }

    @GET
    @Path("/getWeterynarz/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Weterynarz getWeterynarzByID(@PathParam("id") Long id) {
        return weterynarzManager.getWeterynarzByID(id);
    }

    @POST
    @Path("/updateWeterynarz")
    public Response updateWeterynarz(@FormParam("idWeterynarz") long idWeterynarz,
                                   @FormParam("imie") String imie,
                                   @FormParam("nazwisko") String nazwisko)
                                 
    {
        Weterynarz weterynarz = new Weterynarz();
        weterynarz.setId(idWeterynarz);
        weterynarz.setImie(imie);
        weterynarz.setNazwisko(nazwisko);

        weterynarzManager.updateWeterynarz(weterynarz);

        return Response.status(Response.Status.OK).build();
    }

    @POST
    @Path("/deleteWeterynarz")
    public Response deleteWeterynarz(@FormParam("idKasW") long idWeterynarz)
    {
        Weterynarz weterynarz = new Weterynarz();
        weterynarz.setId(idWeterynarz);

        weterynarzManager.deleteWeterynarz(weterynarz);

        return Response.status(Response.Status.OK).build();
    } 

}
