import InlineButton from "@/components/misc/InlineButton";

const BasicContacts = () => {
    const backgroundColor = "bg-slate-350/[27%] backdrop-blur-xl drop-shadow-2xl-c text-slate-200/[55%] md:text-slate-200/[35%]";

    return (
        <div className="p-2 rounded-xl flex gap-2 text-sm justify-center">
            <InlineButton internalTo="404Wolf.com" customBackgroundColor={ backgroundColor }>
                404Wolf.com
            </InlineButton>
            <InlineButton externalTo="mailto:caffeinate@msn.com" customBackgroundColor={ backgroundColor }>
                Caffeinate@msn.com
            </InlineButton>
            <InlineButton externalTo="tel:+10202657180" customBackgroundColor={ backgroundColor }>
                (929)265-7180
            </InlineButton>
        </div>
    );
}
 
export default BasicContacts;