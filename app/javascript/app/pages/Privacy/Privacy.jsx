import React from 'react';
import Faq from "../Home/components/Faq";


const Privacy = () => {
    return (
        <div>
            <section className="section__privacy privacy">
                <div className="privacy__container">
                    <div className="privacy__body">
                        <h1 className="section-title">Abuse Program Policies and Enforcement</h1>
                        <p>
                            The content policies listed below play an important role in maintaining a positive experience
                            for our users. We need to curb abuses that threaten our ability to provide this service, and
                            we ask that everyone abide by the policies below to help us achieve this goal.
                        </p>
                        <p>
                            These policies apply to Gatherum (“Meet”). When applying these policies, we may make
                            exceptions based on educational, documentary, scientific, or artistic considerations, or
                            where there are other substantial benefits to the users of the service. Be sure to check
                            back from time to time, as these policies may change. Please also refer to Gatherum terms of
                            Service for more information.
                        </p>

                        <h2>Report Abuse</h2>
                        <p>
                            Gatherum may disable your ability to use Meet or disable accounts that are found to be in
                            violation of these policies. If your service has been suspended or your account has been
                            disabled, and you believe it was a mistake.
                        </p>

                        <h2>Program Policies</h2>

                        {renderPolicySection("Child Sexual Abuse and Exploitation", [
                            "Do not use Meet to create, upload, or distribute content that exploits or abuses children. This includes all child sexual abuse materials.",
                            "More broadly, Meet prohibits the use of our products to endanger children. This includes but is not limited to predatory behavior towards children such as:",
                            <ul>
                                <li>‘Child grooming’ (for example, befriending a child online to facilitate, either online or offline, sexual contact and/or exchanging sexual imagery with that child);</li>
                                <li>‘Sextortion’ (for example, threatening or blackmailing a child by using real or alleged access to a child’s intimate images);</li>
                                <li>Sexualization of a minor (for example, imagery that depicts, encourages or promotes the sexual abuse of children or the portrayal of children in a manner that could result in the sexual exploitation of children);</li>
                                <li>Trafficking of a child (for example, advertising or solicitation of a child for commercial sexual exploitation).</li>
                            </ul>,
                            "We will take appropriate action, which may include reporting to the National Center for Missing & Exploited Children, limiting access to product features, and disabling accounts. If you believe a child is in danger of or has been subject to abuse, exploitation, or trafficking, contact the police immediately."
                        ])}

                        {renderPolicySection("Circumvention", [
                            "Do not engage in actions intended to bypass our policies or subvert restrictions placed on your account. This includes the creation or use of multiple accounts or other methods intended to engage in a behavior that was previously prohibited."
                        ])}

                        {renderPolicySection("Dangerous & Illegal Activities", [
                            "Do not use Meet to promote, organize, or engage in illegal activities or activities that cause serious and immediate physical harm to people or animals."
                        ])}

                        {renderPolicySection("Fraud, Phishing, and Other Deceptive Practices", [
                            "Do not use Meet for phishing. Refrain from soliciting or collecting sensitive data, including but not limited to passwords, financial details, and Social Security numbers. Do not use Meet to trick, mislead, or deceive other users into sharing information under false pretenses.",
                            "Do not impersonate another person or otherwise misrepresent yourself or the source of a Meet invitation or join request with the intent to deceive, mislead, or defraud."
                        ])}

                        {renderPolicySection("Harassment, Bullying, & Threats", [
                            "Do not harass, bully, or threaten others. We also don’t allow this product to be used to engage or incite others in these activities. Keep in mind that online harassment is illegal in many places and can have serious offline consequences for both the harasser and the victim. We may take appropriate action if we are notified of threats of harm or other dangerous situations, which may include reporting you to the relevant authorities."
                        ])}

                        {renderPolicySection("Hate Speech", [
                            "Do not engage in hate speech. Hate speech is content that promotes or condones violence against or has the primary purpose of inciting hatred against an individual or group on the basis of their race or ethnic origin, religion, disability, age, nationality, veteran status, sexual orientation, gender, gender identity, or any other characteristic that is associated with systemic discrimination or marginalization."
                        ])}

                        {renderPolicySection("Malware & Similar Malicious Content", [
                            "Do not transmit malware or any content that harms or interferes with the operation of the networks, servers, end user devices, or other infrastructure. This includes the direct hosting, embedding, or transmission of malware, viruses, destructive code, or other harmful or unwanted software or similar content. This also includes content that transmits viruses, causes pop-ups, attempts to install software without the user’s consent, or otherwise impacts users with malicious code."
                        ])}

                        {renderPolicySection("Personal and Confidential Information", [
                            "Do not share or distribute other people’s personal or confidential information without authorization. This includes the use of sensitive information, such as U.S. Social Security numbers, bank account numbers, credit card numbers, images of signatures, and personal health documents. In most cases where this information is broadly available elsewhere on the internet or in public records, like national ID numbers listed on a government website, we generally don’t process enforcement actions."
                        ])}

                        {renderPolicySection("Regulated Goods & Services", [
                            "Do not sell, advertise, or facilitate the sale of regulated goods and services. Regulated goods and services include alcohol, gambling, pharmaceuticals, unapproved supplements, tobacco, fireworks, weapons, or health/medical devices."
                        ])}

                        {renderPolicySection("Sexually Explicit Content", [
                            "Do not share or distribute content that contains sexually explicit material, such as nudity, graphic sex acts, and pornographic content. This includes driving traffic to commercial pornography sites. We allow content for educational, documentary, scientific, or artistic purposes."
                        ])}

                        {renderPolicySection("Spam", [
                            "Do not spam. This may include unwanted promotional or commercial content, unwanted content that is created by an automated program, unwanted repetitive content, nonsensical content, or anything that appears to be a mass solicitation."
                        ])}

                        {renderPolicySection("System Interference", [
                            "Do not abuse this product and do not harm, degrade, or negatively affect the operation of networks, devices, or other infrastructure. This includes degrading, disabling, or negatively interfering with any aspect of the product or its services."
                        ])}

                        {renderPolicySection("Terrorist Content", [
                            "Terrorist organizations are not permitted to use this product for any purpose, including recruitment. We’ll also take action against Meeting organizers or participants for content related to terrorism, such as promoting terrorist acts, inciting violence, or celebrating terrorist attacks."
                        ])}

                        {renderPolicySection("Violence & Gore", [
                            "Do not share or distribute violent or gory content involving real-life people or animals that’s primarily intended to be shocking, sensational, or gratuitous. This includes ultra-graphic violence, such as dismemberment or close-up footage of mutilated corpses. Graphic violence, such as content containing significant amounts of blood, may be allowed in an educational, documentary, scientific, or artistic context, but please be mindful to provide enough information to help people understand the context. In some cases, content may be so violent or shocking that no amount of context will allow that content to remain on our platforms. Lastly, don't encourage others to commit specific acts of violence."
                        ])}
                    </div>
                </div>
            </section>
            <Faq />
        </div>
    );
};

const renderPolicySection = (title, content) => {
    return (
        <section>
            <h3>{title}</h3>
            {content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </section>
    );
};

export default Privacy;
