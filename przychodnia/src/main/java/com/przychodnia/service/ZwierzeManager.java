package com.przychodnia.service;

import com.przychodnia.dao.ZwierzeDAO;
import com.przychodnia.domain.Zwierze;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class ZwierzeManager implements ZwierzeDAO
{
	@PersistenceContext
    EntityManager em;

    public Zwierze addZwierze(Zwierze zwierze)
    {
        em.persist(zwierze);
        em.flush();

        return zwierze;
    }

    public void deleteZwierze(Zwierze zwierze)
    {
        em.remove(em.getReference(Zwierze.class, zwierze.getId()));
    }

    public void updateZwierze(Zwierze zwierze)
    {
    	Zwierze z=(Zwierze)em.find(Zwierze.class,zwierze.getId());
    	z.setImie(zwierze.getImie());
    	z.setGatunek(zwierze.getGatunek());
    	z.setDataur(zwierze.getDataur());
    	z.setWeterynarz(zwierze.getWeterynarz());
    }

    public List<Zwierze> getAllZwierzes()
    {
        return em.createNamedQuery("zwierze.getAll").getResultList();
    }

    public Zwierze getZwierzeByID(Long id)
    {
        return em.find(Zwierze.class, id);
    }
	

}
