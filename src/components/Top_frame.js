import { useState } from "react";

function Top_Frame() {

  const [text1, setText1] =useState(true);
  const [text2, setText2] =useState(false);
  const [text3, setText3] =useState(false);

  return (
    <div className="top p-4 flex flex-col justify-between rounded-2xl">
      <div className="navbar flex flex-row justify-around mx-8 h-16 rounded-3xl">
        <button className="flex items-center justify-center m-1 w-52 rounded-3xl" 
        id={`${text1?"active":""}`}
        onClick={()=>{setText1(true);
          setText2(false);
          setText3(false);
        }}>

          <a href="#text1">about me</a>
          </button>

        <button className="flex items-center justify-center m-1 w-52 rounded-3xl" 
        id={`${text2?"active":""}`}
        onClick={()=>{setText2(true);
          setText1(false);
          setText3(false);}}>

          <a href="#text2">experiences</a>
          </button>

        <button className="flex items-center justify-center m-1 w-52 rounded-3xl" 
        id={`${text3?"active":""}`}
        onClick={()=>{setText3(!text3);
          setText2(false);
          setText1(false);}}>
          <a href="#text3">recomended</a>
          </button>

      </div>
      <div className="content">
        <div className="text overflow-y-scroll mx-6 p-4 my-4">
          {text1 && <p className="text1" id="text1">Paragraphs are the building blocks of papers.
            Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences,
            a paragraph is half a page long, etc.
            In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.
            A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).
            Length and appearance do not determine whether a section in a paper is a paragraph.
            For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.
            Ultimately, a paragraph is a sentence or group of sentences that support one main idea.
            In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
          </p>}
          {text2 && <p id="text2" className="text2" >Development of ‘open source’ receives very little attention especially official concerns by the initial founders for its development.
            The initial organizations to benefit from the open licensing systems directly included the Department of Defence (DOD),
            Research Agencies, and the Lab researchers such as National Laboratories (Reece et al, 92).
            These organizations were the most viable producers, users and beneficiaries of the licensing operation.
            The firms also provided the platform for major advances such as the firewalls,
            and other network security tools.
            Open licensing therefore caused firms to merge ideas and integrate development of operating systems and related software to high-tech but inexpensive software/hardware supercomputers to replace the original Pentium-based systems.
          </p>}
          {text3 && <p id="text3" className="text3">Although departments such as the DOD or Space Agencies may have developed or initiated most of the research into open source,
            in overall, today’s beneficiaries include commercial agencies.
            Commercial enterprises such as Netscape, Red Hat, Cygnus, MacAfee and
            Caldera were quick to realize the opportunities offered by web-based methodologies and begun to offer the open source arrangements.
            Other firms that latter on came in support of open source included the hardware developers such as Dell, Hewlett-Packard, Compaq,
            Sun Microsystems and IBM (International Business Machines) among others. Consistent with VanDyk, the concept open source emerged
            from software engineers, but today the entire movement is made of technologically motivated individuals (9).
            They focus more on technological productivity as opposed to economical benefits.
          </p>}
        </div>

      </div>
    </div>
  );
}

export default Top_Frame;