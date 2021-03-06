package com.przychodnia.rest;

import com.przychodnia.dao.WeterynarzDAO;
import com.przychodnia.dao.ZwierzeDAO;
import com.przychodnia.domain.Zwierze;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.sql.Date;
import java.util.List;

@Stateless
@Path("/zwierze")

public class ZwierzeResource
{
	@EJB
    private ZwierzeDAO zwierzeManager;
	@EJB
    private WeterynarzDAO weterynarzManager;

    @POST
    @Path("/addZwierze")
    public Response addZwierze(@FormParam("imie") String imie,
                                @FormParam("gatunek") String gatunek,
                                @FormParam("dataur") Date dataur,
    							@FormParam("weterynarz") Long weterynarzid)
                                
    {
    	Long weterynarzID = weterynarzid;
    	
    	Zwierze zwierze = new Zwierze();
        zwierze.setImie(imie);
        zwierze.setGatunek(gatunek);
        zwierze.setDataur(dataur);
        zwierze.setWeterynarz(weterynarzManager.getWeterynarzByID(weterynarzID));


        zwierzeManager.addZwierze(zwierze);

        return Response.status(Response.Status.CREATED).build();
    }

    @GET
    @Path("/getAllZwierzes")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Zwierze> getAllZwierzes() {
        return zwierzeManager.getAllZwierzes();
    }

    @GET
    @Path("/getZwierze/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Zwierze getZwierzeByID(@PathParam("id") Long id) {
        return zwierzeManager.getZwierzeByID(id);
    }

    @POST
    @Path("/updateZwierze")
    public Response updateZwierze(@FormParam("zid") long idZwierze,
                                   @FormParam("imie") String imie,
                                   @FormParam("gatunek") String gatunek,
                                   @FormParam("dataur") Date dataur,
    							   @FormParam("weterynarzid") String wid)
    {
    	Long weterynarzID = Long.parseLong(wid.replaceAll("\\D+",""));
    	
    	Zwierze zwierze = zwierzeManager.getZwierzeByID(idZwierze);
        zwierze.setImie(imie);
        zwierze.setGatunek(gatunek);
        zwierze.setDataur(dataur);
        zwierze.setWeterynarz(weterynarzManager.getWeterynarzByID(weterynarzID));
        zwierzeManager.updateZwierze(zwierze);

        return Response.status(Response.Status.OK).build();
    }

    @POST
    @Path("/deleteZwierze")
    public Response deleteZwierze(@FormParam("idKas") long idZwierze)
    {
        Zwierze zwierze = new Zwierze();
        zwierze.setId(idZwierze);

        zwierzeManager.deleteZwierze(zwierze);

        return Response.status(Response.Status.OK).build();
    } 

}