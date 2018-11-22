<?php

namespace BackBundle\Entity;

/**
 * Event
 */
class Event
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $description;


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Event
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return Event
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }
    /**
     * @var \BackBundle\Entity\EventType
     */
    private $eventtype;


     /**
     * Constructor
     */
    public function __construct()
    {
        $this->eventtype = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Set eventtype
     *
     * @param \BackBundle\Entity\EventType $eventtype
     *
     * @return Event
     */
    public function setEventtype(\BackBundle\Entity\EventType $eventtype = null)
    {
        
        $this->eventtype = $eventtype;

        return $this;
    }

    /**
     * Get eventtype
     *
     * @return \BackBundle\Entity\EventType
     */
    public function getEventtype()
    {
        return $this->eventtype;
    }
    
}
