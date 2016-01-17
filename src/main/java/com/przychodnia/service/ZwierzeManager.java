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

    public Zwierze updateZwierze(Zwierze zwierze)
    {
        return (Zwierze)em.merge(zwierze);
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
